import React from 'react';
import LayoutScreen from 'src/layout/LayoutScreen';
import Login from 'src/Components/AuthComponent/authComponent';

const auth = (props: Props) => {
    return (
        <LayoutScreen>
            <Login />
        </LayoutScreen>
    );
};
type Props = {};

export default auth;
