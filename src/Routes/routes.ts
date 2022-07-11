import CartScreen from 'src/screens/CartScreen';
import Home from 'src/screens/Home';
import ProductItemScreen from 'src/screens/ProductItemScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import Shop from 'src/screens/Shop';

export const puclicRoutes = [
    {
        path: '/',
        Element: Home,
    },
    {
        path: '/shop',
        Element: Shop,
    },
    {
        path: '/shop/:page',
        Element: Shop,
    },

    {
        path: '/shop/product/:id',
        Element: ProductItemScreen,
    },
];

export const privateRoutes = [
    {
        path: '/cart',
        Element: CartScreen,
    },
    {
        path: '/profile',
        Element: ProfileScreen,
    },
];
