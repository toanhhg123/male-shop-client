import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from 'src/Models/Product';
import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { products, getProductsRequest } from 'src/features/ProductSlice';
import prsFoot from 'src/assets/images/prs_foot.png';

type Props = {};

const HomeProduct = (props: Props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProductsRequest({}));
    }, [dispatch]);
    const productList: Product[] = useAppSelector(products);

    return (
        <div className="products mt-5 mb-5">
            <div className="container">
                <div className="prs__nav row justify-content-center mb-5 mt-3">
                    <div className="col-3">
                        <Link className="prs__nav-link active" to="/Shop">
                            Best Sellers
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link className="prs__nav-link" to="/Shop">
                            New Arrivals
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link className="prs__nav-link" to="/Shop">
                            Hot Sales
                        </Link>
                    </div>
                </div>

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

                <div className="text-center"></div>
            </div>
            <div className="prs__ads p-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-lg-3">
                            <div className="prs__ads__box">
                                <h3>Clothing Hot</h3>
                                <h3 className="active">Shoes Collection</h3>
                                <h3>Accessories</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="prs__ads__box">
                                <img src={prsFoot} alt="" />
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 pt-5">
                            <div className="prs__ads__box">
                                <span>Deal of the Week</span>
                                <h4>Multi Pocket Chest Bags</h4>
                                <h5>30 Days Left</h5>
                                <Link to="/Shop" className="btn-black">
                                    <span>Shop now</span>
                                    <i className="bi bi-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
