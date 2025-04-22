import {
    CardWrapper,
    ProductName,
    ProductPriceWrapper,
    ProductStatistic,
} from './styles';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <CardWrapper
            hoverable
            cover={
                <img
                    alt='example'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
            }
            bodyStyle={{ padding: '10px' }}
        >
            <ProductName>Iphone 13 promax</ProductName>
            <ProductStatistic>
                <span>
                    4.5 <StarFilled style={{ color: 'yellow' }} />
                </span>
                <span style={{ margin: '-1px 6px 0' }}>|</span>
                <span> 1000+ đã bán</span>
            </ProductStatistic>
            <ProductPriceWrapper>
                <span style={{ fontSize: '1.6rem' }}>1.000.000đ</span>
                <span style={{ fontSize: '1.2rem', margin: '2px 0 0 4px' }}>
                    -24%
                </span>
            </ProductPriceWrapper>
        </CardWrapper>
    );
};

export default CardComponent;
