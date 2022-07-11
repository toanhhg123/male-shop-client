import React from 'react';

type Props = {};

const ProductItemRating = (props: Props) => {
    return (
        <div className="prI__client row">
            <h3>KHÁCH HÀNG ĐÁNH GIÁ</h3>
            <div className="col-12 col-lg-5">
                <div className="prI__rate">
                    <div className="prI__num">
                        <h4>5</h4>
                        <div className="prI__num-r">
                            <div className="prI__num-r-rts">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span>(0 Đánh Giá)</span>
                        </div>
                    </div>

                    <div className="prI__rate-row">
                        <div className="prI__rate-row-rts d-flex text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="prI__rate-line"></div>
                        <p>5</p>
                    </div>
                    <div className="prI__rate-row">
                        <div className="prI__rate-row-rts d-flex text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div className="prI__rate-line"></div>
                        <p>4</p>
                    </div>
                    <div className="prI__rate-row">
                        <div className="prI__rate-row-rts d-flex text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div className="prI__rate-line"></div>
                        <p>3</p>
                    </div>
                    <div className="prI__rate-row">
                        <div className="prI__rate-row-rts d-flex text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>

                            <i className="bi bi-star"></i>
                        </div>
                        <div className="prI__rate-line"></div>
                        <p>2</p>
                    </div>
                    <div className="prI__rate-row">
                        <div className="prI__rate-row-rts d-flex text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div className="prI__rate-line"></div>
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-7">
                <div className="prI__client-r">
                    <div className="prI__rt-img">
                        <img src="../images/image_star_smile.png" alt="" />
                    </div>
                    <p>
                        Sản phẩm chưa có đánh giá. Hãy là người đầu tiên đánh
                        giá sản phẩm này !
                    </p>
                    <button>Đánh giá sản phẩm</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItemRating;
