import { Admin } from '../pages/Admin/Admin';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFoundPage/NotFound';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';

export const router = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
    },
    {
        path: '/admin',
        page: Admin,
        isShowHeader: false,
    },
    {
        path: '*',
        page: NotFound,
        isShowHeader: false,
    },
    {
        path: `/products/`,
        page: ProductsPage,
        isShowHeader: true,
    },

    {
        path: 'login',
        page: Login,
        isShowHeader: false,
    },
    {
        path: 'register',
        page: Register,
        isShowHeader: false,
    },
];
