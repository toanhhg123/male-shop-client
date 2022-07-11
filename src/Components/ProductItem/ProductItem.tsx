import React, { useEffect } from 'react';
import ProductItemInfo from './ProductItemInfo';
import ProductItemRating from './ProductItemRating';
import ProductItemSlide from './ProductItemSlide';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
    getProductItemRequest,
    error,
    isLoading,
    productItem,
} from 'src/features/ProductItemSlice';

type Props = {};

const ProductItem = (props: Props) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { id } = params || '';

    const errorMessage = useAppSelector(error);
    const loading = useAppSelector(isLoading);
    const product = useAppSelector(productItem);

    useEffect(() => {
        dispatch(getProductItemRequest(id));
    }, [dispatch, id]);

    if (errorMessage) return <Navigate to={'/not-found'} />;
    if (loading) return <h1 className="">loading ..... </h1>;
    return (
        <div className="proItem">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <ProductItemSlide product={product} />
                    </div>
                    <div className="col-12 col-lg-5">
                        <ProductItemInfo product={product} />
                    </div>
                </div>
                <ProductItemRating />
            </div>
        </div>
    );
};

export default ProductItem;
