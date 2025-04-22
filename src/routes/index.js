import { DefaultLayout } from '../layouts';
import {
    HomePage,
    NotFoundPage,
    OderPage,
    ProductsPage,
    TypePage,
} from '../pages';

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
        path: '/type/:type',
        page: TypePage,
        layout: DefaultLayout,
    },
    {
        path: '*',
        page: NotFoundPage,
        layout: null,
    },
];

export default routes;
