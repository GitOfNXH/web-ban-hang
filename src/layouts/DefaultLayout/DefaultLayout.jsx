import { Layout } from 'antd';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <Layout>
            <Header />
            {children}
            <Footer />
        </Layout>
    );
};

export default DefaultLayout;
