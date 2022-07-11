import React from 'react';
import { Link } from 'react-router-dom';
import img1 from 'src/assets/images/view_1.png';
import img2 from 'src/assets/images/view_2.png';
import img3 from 'src/assets/images/view_3.png';

type Props = {};

const Review = (props: Props) => {
    return (
        <div className="review">
            <div className="rv__container container-sm">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5">
                        <div className="view__card">
                            <div className="view__bn"></div>
                            <div className="view__card-content">
                                <div className="view__card-left">
                                    <h3>Clothing Collection 2021</h3>
                                    <Link to="/shop">Show Now</Link>
                                </div>
                                <div className="view__card-right">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 mt-5">
                        <div className="row justify-content-between gap-3">
                            <div className="col-12 col-lg-5">
                                <div className="view__card">
                                    <div className="view__bn"></div>
                                    <div className="view__card-content">
                                        <div className="view__card-left">
                                            <h3>Accessories</h3>
                                            <Link to="/Shop">Show Now</Link>
                                        </div>
                                        <div className="view__card-right">
                                            <img src={img2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="view__card">
                                    <div className="view__bn"></div>
                                    <div className="view__card-content">
                                        <div className="view__card-left">
                                            <h3>Shoes Collection 2021</h3>
                                            <Link to="/Shop">Show Now</Link>
                                        </div>
                                        <div className="view__card-right">
                                            <img src={img3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
