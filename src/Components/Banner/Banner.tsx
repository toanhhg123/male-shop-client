import React from 'react';
import { Link } from 'react-router-dom';
import bn1 from 'src/assets/images/bn_1.png';
import bn2 from 'src/assets/images/bn_2.png';
import bn3 from 'src/assets/images/bn_3.png';

type Props = {};

const Banner = (props: Props) => {
    return (
        <div className="banner">
            <div className="bn__container container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="bn__left">
                            <h5>Summer Collection</h5>
                            <h3>Fall - Winter</h3>
                            <h3>Collection 2021</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Eu sed arcu, sit id vulputate
                                purus tristique egestas.
                            </p>
                            <Link to="/shop">
                                <span>Shop now</span>
                                <i className="bi bi-chevron-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="bn__right">
                            <div
                                id="carouselExampleInterval"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div
                                        className="carousel-item active"
                                        data-bs-interval="3000"
                                    >
                                        <img
                                            src={bn1}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div
                                        className="carousel-item"
                                        data-bs-interval="6000"
                                    >
                                        <img
                                            src={bn2}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div
                                        className="carousel-item"
                                        data-bs-interval="6000"
                                    >
                                        <img
                                            src={bn3}
                                            className="d-block w-100"
                                            alt="..."
                                        />
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

export default Banner;
