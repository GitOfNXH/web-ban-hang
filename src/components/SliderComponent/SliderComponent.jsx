import Slider from 'react-slick';
import { Grid } from 'antd';
import { SliderImage } from './styles';

const { useBreakpoint } = Grid;

const SliderComponent = ({ slidersArray }) => {
    const screens = useBreakpoint();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div style={{ padding: !screens.md ? '0 10px' : '', margin: '12px 0' }}>
            <Slider {...settings}>
                {slidersArray.map((slider, index) => (
                    <SliderImage
                        src={slider}
                        key={index}
                        alt='slider'
                        preview={false}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
