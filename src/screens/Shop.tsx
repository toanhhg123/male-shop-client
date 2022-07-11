import React from 'react';
import ProductList from 'src/Components/ListProduct/ProductList';
import Pagination from 'src/Components/Pagination/Pagination';
import SideBarShop from 'src/Components/SideBarShop/SideBarShop';
import LayoutScreen from 'src/layout/LayoutScreen';

type Props = {};

const Shop = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <SideBarShop />

                            <div className="col-12 col-lg-9">
                                <h3 className="text-secondary fs-3 fw-bolder pt-3">
                                    Hàng nam mới về
                                </h3>
                                <ProductList />

                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutScreen>
    );
};

export default Shop;
