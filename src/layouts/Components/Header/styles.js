import { Row } from 'antd';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: var(--default-layout-header-hight);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(26, 148, 255);
    z-index: 999;
`;

export const HeaderRowWrapper = styled(Row)`
    height: var(--default-layout-header-hight);
    align-items: center;
    color: #fff;
    font-size: 3rem;
`;

export const LogoText = styled.span`
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.3;
    color: #fff;
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const UserText = styled.p`
    font-size: 1.2rem;
    margin: 0;
`;

export const CartWrapper = styled.div`
    display: flex;
    margin-left: auto;
    cursor: pointer;
`;

export const CartText = styled.p`
    font-size: 1.2rem;
    margin: 0 0 0 2px;
    align-self: flex-end;
`;
