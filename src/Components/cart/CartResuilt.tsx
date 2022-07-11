import React from 'react';

type Props = {
    total: number;
};

const CartResuilt = (props: Props) => {
    return (
        <div className="cart__result">
            <div className="cart__result__ct">
                <h3>Tổng tiền sản phẩm</h3>
                <div className="">
                    <span>Tổng sản phẩm: </span>
                    <span className="sum__qty">{props.total}</span>
                </div>
                <div className="">
                    <span>Tổng tiền hàng: </span>
                    <span className="sum__money">{props.total}</span>
                </div>
                <div className="">
                    <span>Thành tiền: </span>
                    <span className="total__money">{props.total}</span>
                </div>
                <div className="if__ship">
                    <i className="bi bi-check2-circle"></i>
                    <p>Đơn hàng của bạn được Miễn phí ship</p>
                </div>
            </div>
        </div>
    );
};

export default CartResuilt;
