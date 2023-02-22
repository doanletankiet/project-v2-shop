import { Admin } from '../pages/Admin/Admin';
import { Auth } from '../pages/Auth/Auth';
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
    },
    {
        path: '*',
        page: NotFound,
    },
    {
        path: '/products',
        page: ProductsPage,
    },
    {
        path: '/auth',
        page: Auth,
    },
];
