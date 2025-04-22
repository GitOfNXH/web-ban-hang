import { DefaultLayout } from '../layouts';
import { HomePage, NotFoundPage, OderPage, ProductsPage } from '../pages';

const routes = [
    {
        path: '/',
        page: HomePage,
        layout: DefaultLayout,
    },
    {
        path: '/order',
        page: OderPage,
        layout: DefaultLayout,
    },
    {
        path: '/products',
        page: ProductsPage,
        layout: DefaultLayout,
    },
    {
        path: '*',
        page: NotFoundPage,
        layout: null,
    },
];

export default routes;
