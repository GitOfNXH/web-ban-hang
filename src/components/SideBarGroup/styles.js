import { Checkbox } from 'antd';
import styled from 'styled-components';

export const Label = styled.h3`
    color: rgb(56, 56, 61);
    font-size: 1.4rem;
    font-weight: 500;
`;

export const TextContent = styled.p`
    color: rgb(56, 56, 61);
    font-size: 1.2rem;
    padding-bottom: 12px;
`;

export const CheckboxGroup = styled(Checkbox.Group)`
    display: flex;
    align-items: start;
    flex-direction: column;
    row-gap: 12px;
`;

export const PriceContent = styled.p`
    width: fit-content;
    background-color: #efefef;
    border-radius: 99px;
    padding: 4px 8px;
    color: rgb(56, 56, 61);
    font-size: 1.2rem;
    margin-bottom: 12px;
`;
