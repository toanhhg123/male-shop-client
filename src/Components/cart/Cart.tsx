import React from 'react';
import CartItem from './CartItem';
import { useCallback } from 'react';
import CartResuilt from './CartResuilt';
import { useAppSelector } from 'src/app/hooks';
import { productOrderState } from 'src/features/ProductOrderSlice';

const Cart = () => {
    const productOrders = useAppSelector(productOrderState);

    const total = useCallback(() => {
        return productOrders.reduce((resuilt, product) => {
            return product.totailPrice ? resuilt + product.totailPrice : 0;
        }, 0);
    }, [productOrders]);

    return (
        <div className="cart">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="cart__if pt-5">
                            <h2 className="fs-4 fw-semibold">
                                Giỏ hàng của bạn -
                                <span className="text-danger"> Sản Phẩm</span>
                            </h2>

                            <table className="table table-striped table-hover table-bordered mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">TÊN SẢN PHẨM</th>
                                        <th scope="col">SỐ LƯỢNG</th>
                                        <th scope="col">TỔNG TIỀN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productOrders.map((p, i) => (
                                        <CartItem key={i} productOrder={p} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <CartResuilt total={total()} />

                        <div className="cart__btn__buy">
                            <button>BUY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
