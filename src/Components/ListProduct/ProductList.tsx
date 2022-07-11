import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import ProductCard from 'src/Components/HomeProduct/ProductCard';
import { getProductsRequest, products } from 'src/features/ProductSlice';
import { Product } from 'src/Models/Product';
import { useParams } from 'react-router-dom';
type Props = {};

const ProductList = (props: Props) => {
    const params = useParams();

    const { page } = params || 1;

    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getProductsRequest({ page: Number(page) }));
    }, [dispatch, page]);
    const productList: Product[] = useAppSelector(products);
    return (
        <div className="products mt-5 mb-5">
            <div className="container">
                <div className="prs__cards row">
                    {productList.map((p, i) => {
                        return (
                            <ProductCard
                                key={i}
                                id={p._id}
                                type={p.type}
                                productName={p.productName}
                                imageUrl={p.imageUrl}
                                price={p.price}
                                rate={p.rating}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
