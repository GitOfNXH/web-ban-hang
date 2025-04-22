import { Col, Row } from 'antd';
import { CardComponent } from '..';

const ProductBlock = () => {
    return (
        <Row gutter={10} style={{ rowGap: '10px' }}>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
            <Col span={8} md={6} lg={4}>
                <CardComponent />
            </Col>
        </Row>
    );
};

export default ProductBlock;
