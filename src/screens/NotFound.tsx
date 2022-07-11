import React from 'react';
import LayoutScreen from 'src/layout/LayoutScreen';
import NotFoundComponent from 'src/Components/NotFound/NotFound';

type Props = {};

const NotFound = (props: Props) => {
    return (
        <LayoutScreen>
            <NotFoundComponent />
        </LayoutScreen>
    );
};

export default NotFound;
