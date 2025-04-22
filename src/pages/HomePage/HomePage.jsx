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
import { ButtonMore, HomePageWrapper } from './styles';

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

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '24px',
                    }}
                >
                    <ButtonMore
                        style={{
                            border: '1px solid currentColor',
                            color: 'rgb(11, 116, 229)',
                            width: '240px',
                            height: '38px',
                            borderRadius: '5px',
                        }}
                    >
                        Xem thêm
                    </ButtonMore>
                </div>
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;
