import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    const Page = route.page;
                    const Layout = route.layout ?? Fragment;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
};

export default App;
