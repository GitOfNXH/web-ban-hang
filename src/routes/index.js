import HomePage from '../pages/HomePage/HomePage';
import OderPage from '../pages/OderPage/OderPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/order',
        page: OderPage,
    },
    {
        path: '/',
        page: ProductsPage,
    },
];

export default routes;
