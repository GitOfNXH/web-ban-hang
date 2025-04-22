import { Row, Col, Grid } from 'antd';
import { SideBarWrapper, Heading, HeadingWrapper } from './styles';
import {
    CardComponent,
    CategoryComponent,
    SideBarGroup,
} from '../../components';

const { useBreakpoint } = Grid;
const TypePage = () => {
    const screens = useBreakpoint();

    return (
        <div
            style={{
                marginTop: !screens.md ? '200px' : '140px',
            }}
        >
            <CategoryComponent />
            <div className='container'>
                <Row gutter={24}>
                    <SideBarWrapper span={0} md={7} lg={5}>
                        <SideBarGroup />
                    </SideBarWrapper>

                    <Col span={24} md={17} lg={19}>
                        <HeadingWrapper>
                            <Heading>Điện Gia Dụng</Heading>
                        </HeadingWrapper>
                        <Row
                            gutter={8}
                            style={{ rowGap: '8px', marginTop: '20px' }}
                        >
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                            <Col span={8} md={8} lg={6}>
                                <CardComponent />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TypePage;
