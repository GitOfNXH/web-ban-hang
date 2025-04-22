import { Grid } from 'antd';

import {
    CategoryComponent,
    ProductBlock,
    SliderComponent,
} from '../../components';
import slide1 from '../../assets/images/slider-1.jpg';
import slide2 from '../../assets/images/slider-2.jpg';
import slide3 from '../../assets/images/slider-3.jpg';
import slide4 from '../../assets/images/slider-4.jpg';
import { HomePageWrapper } from './styles';

const { useBreakpoint } = Grid;
const HomePage = () => {
    const screens = useBreakpoint();
    return (
        <HomePageWrapper
            style={{
                marginTop: !screens.md ? '160px' : '100px',
            }}
        >
            <div className='container'>
                <CategoryComponent />

                <SliderComponent
                    slidersArray={[slide1, slide2, slide3, slide4]}
                />

                <ProductBlock />
            </div>

            <h1>Hello bạn nhỏ</h1>
        </HomePageWrapper>
    );
};

export default HomePage;
