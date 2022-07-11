import React from 'react';
import ProductItem from 'src/Components/ProductItem/ProductItem';
import LayoutScreen from 'src/layout/LayoutScreen';
type Props = {};

const ProductItemScreen = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <ProductItem />
            </main>
        </LayoutScreen>
    );
};

export default ProductItemScreen;
