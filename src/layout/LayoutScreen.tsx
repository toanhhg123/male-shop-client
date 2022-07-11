import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
    children?: React.ReactNode;
};

const LayoutScreen = (props: Props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children ? props.children : null}
            <Footer />
        </React.Fragment>
    );
};

export default LayoutScreen;
