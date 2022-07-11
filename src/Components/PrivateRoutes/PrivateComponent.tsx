import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';
import { isAuthenticated } from 'src/features/AuthFile/Auth';
// import { useAppSelector } from 'src/app/hooks';
// import { isAuthenticated } from 'src/features/AuthFile/Auth';

type Props = {
    children?: any;
};

const PrivateComponent = (props: Props) => {
    const isLogin = useAppSelector(isAuthenticated);

    return isLogin ? props.children : <Navigate to={'/login'} />;
};

export const PrivateRoute = () => {
    const isLogin = useAppSelector(isAuthenticated);
    const location = useLocation();

    return isLogin ? (
        <Outlet />
    ) : (
        <Navigate to={`/login/?redirect=${location.pathname}`} />
    );
};

export default PrivateComponent;
