import React from 'react';
import Cart from 'src/Components/cart/Cart';
import LayoutScreen from 'src/layout/LayoutScreen';

type Props = {};

const CartScreen = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <Cart />
            </main>
        </LayoutScreen>
    );
};

export default CartScreen;
