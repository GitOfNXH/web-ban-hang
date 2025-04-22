import { Card } from 'antd';
import styled from 'styled-components';

export const CardWrapper = styled(Card)`
    & img {
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
`;

export const ProductName = styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(56, 56, 61);
    line-height: 1.33333;
`;

export const ProductStatistic = styled.div`
    font-size: 1.1rem;
    color: rgb(128, 128, 137);
    display: flex;
    line-height: 1.33333;
`;

export const ProductPriceWrapper = styled.div`
    color: rgb(255, 66, 78);
    display: flex;
    align-items: center;
    font-weight: 500;
`;
