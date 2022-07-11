import React from 'react';

type Props = {};

const SideBarShop = (props: Props) => {
    return (
        <div className="col-12 col-lg-3">
            <div className="side-bar__shop">
                <div className="sb__shop-head">
                    <h3>Trang chủ - Hàng nam mới về</h3>
                </div>
                <div className="sb__shop-body">
                    <div className="sb__shop-op">
                        <div className="sb__shop-view">
                            <span>Size</span>
                            <i className="bi bi-plus-lg plus-icon"></i>
                            <i className="bi bi-dash-lg dash-icon"></i>
                        </div>
                        <div className="sb__shop-choices">
                            <div className="sb__shop-choices-btngr">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                                <span>XXL</span>
                            </div>
                        </div>
                    </div>
                    <div className="sb__shop-op">
                        <div className="sb__shop-view">
                            <span>Màu sắc</span>
                            <i className="bi bi-plus-lg plus-icon"></i>
                            <i className="bi bi-dash-lg dash-icon"></i>
                        </div>
                        <div className="sb__shop-choices">
                            <div className="sb__shop-choices-btngr">
                                <div className="color bg-primary"></div>
                                <div className="color bg-info"></div>
                                <div className="color bg-warning"></div>
                                <div className="color bg-danger"></div>
                                <div className="color bg-secondary"></div>
                                <div className="color bg-success"></div>
                                <div className="color bg-black"></div>
                                <div className="color bg-gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sb__shop-op">
                        <div className="sb__shop-view">
                            <span>Mức giá</span>
                            <i className="bi bi-plus-lg plus-icon"></i>
                            <i className="bi bi-dash-lg dash-icon"></i>
                        </div>
                        <div className="sb__shop-choices">
                            <div className="sb__shop-choices-btngr">
                                <div className="sb__shop-input__range">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        step="10"
                                        className="form-range"
                                    />
                                    <div className="sb__shop-input__range-value">
                                        <span className="input__range-value min">
                                            $0
                                        </span>
                                        <span className="input__range-value max">
                                            $1000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sb__shop-op">
                        <div className="sb__shop-view">
                            <span>Mức chiết khấu</span>
                            <i className="bi bi-plus-lg plus-icon"></i>
                            <i className="bi bi-dash-lg dash-icon"></i>
                        </div>
                        <div className="sb__shop-choices">
                            <div className="sb__shop-choices-btngr ps-4">
                                <div className="">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 30%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 40%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 40%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 50%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 60%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 70%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 80%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 90%
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Dưới 100%
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sb__shop-op">
                        <div className="sb__shop-view">
                            <span>Nâng cao</span>
                            <i className="bi bi-plus-lg plus-icon"></i>
                            <i className="bi bi-dash-lg dash-icon"></i>
                        </div>
                    </div>
                </div>

                <div className="sb__shop-buttions">
                    <button>Bỏ Lọc</button>
                    <button className="bl">Lọc</button>
                </div>
            </div>
        </div>
    );
};

export default SideBarShop;
