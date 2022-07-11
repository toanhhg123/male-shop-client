import React from 'react';
import { Product } from 'src/Models/Product';

interface Props {
    product?: Product;
}

const ProductItemSlide = (props: Props) => {
    const imgs: string[] = props.product?.imgs || [];
    return (
        <div className="proItem__grImgs">
            <div className="proItem__mainImg">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {imgs.map((img, i) => (
                            <div
                                key={i}
                                className={`carousel-item ${
                                    i === 0 ? 'active' : ''
                                }`}
                            >
                                <img
                                    src={img}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="proItem__smaiImgs">
                {imgs.map((img, i) => {
                    return (
                        <img
                            key={i}
                            src={img}
                            alt=""
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide-to={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductItemSlide;
