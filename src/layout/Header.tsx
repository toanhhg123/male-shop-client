import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from 'src/assets/images/male_mashion.png';
import HeaderSearch from 'src/Components/Search/HeaderSearch';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { productOrderState } from 'src/features/ProductOrderSlice';
import {
    authLogout,
    isAuthenticated,
    userInfo,
} from 'src/features/AuthFile/Auth';
import { productOrderRequest } from 'src/features/ProductOrderSlice';
type Props = {};

export const HeaderMobile = ({ style, setShowHeaderMobile }: any) => {
    return (
        <div
            className="hd__modal"
            style={style}
            onClick={() => setShowHeaderMobile(false)}
        >
            <div className="nav__mb">
                <div className="nav__mb__log">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <div className="nav__link-left">
                                <i className="bi bi-house"></i>
                                <span>Home</span>
                            </div>
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop">
                            <div className="nav__link-left">
                                <i className="bi bi-shop"></i>
                                <span>Shop</span>
                            </div>
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            <div className="nav__link-left">
                                <i className="bi bi-newspaper"></i>
                                <span>Blog</span>
                            </div>
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <div className="nav__link-left">
                                <i className="bi bi-chat-left-quote"></i>
                                <span>Contact</span>
                            </div>
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const Header = (props: Props) => {
    const isLogin = useAppSelector(isAuthenticated);
    const user = useAppSelector(userInfo);
    const dispatch = useAppDispatch();
    const productsOrder = useAppSelector(productOrderState);

    const location = useLocation();
    const [showHeaderMobile, setShowHeaderMobile] = React.useState(false);
    const [headerSearch, setHeaderSearch] = useState(false);

    const isActive = ({ isActive }: any) => {
        return isActive ? 'active' : '';
    };

    const styleHeaderMobile = {
        transform: showHeaderMobile ? 'translateX(0)' : 'translateX(-100%)',
    };

    useEffect(() => {
        if (isLogin) dispatch(productOrderRequest());
    }, [isLogin, dispatch]);

    return (
        <header className="header">
            {headerSearch && <HeaderSearch />}
            <HeaderMobile
                style={styleHeaderMobile}
                setShowHeaderMobile={setShowHeaderMobile}
            />
            <div className="hd__container container">
                <div
                    className="hd__menu__icon"
                    onClick={() => setShowHeaderMobile(true)}
                >
                    <i className="bi bi-list"></i>
                </div>

                <div className="hd__logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="hd__nav">
                    <ul>
                        <li>
                            <NavLink className={isActive} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={isActive} to="/shop">
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={isActive} to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={isActive} to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hd__auth">
                    <div
                        className="hd__auth-icon"
                        onClick={() => setHeaderSearch(!headerSearch)}
                    >
                        <i
                            className={`bi ${
                                headerSearch ? 'bi-x-lg' : 'bi-search'
                            }`}
                        ></i>
                    </div>
                    {isLogin ? (
                        <div className="hd__auth-icon hd__auth__if">
                            <img src={user?.imageUrl || ''} alt="" />
                            <ul>
                                <li>
                                    <Link to={'/profile'}>profile</Link>
                                </li>
                                <li onClick={() => dispatch(authLogout())}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to={`/login/?redirect=${location.pathname}`}
                            className="hd__auth-icon"
                        >
                            <i className="bi bi-person-circle"></i>
                        </Link>
                    )}
                    <Link to={`/chat`} className="hd__auth-icon">
                        <i className="bi bi-chat"></i>
                    </Link>
                    <Link to={`/cart`} className="hd__auth-icon hd__cart">
                        <span>{productsOrder.length}</span>
                        <i className="bi bi-bag"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
