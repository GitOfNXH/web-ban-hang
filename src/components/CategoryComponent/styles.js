import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    position: fixed;
    top: var(--default-layout-header-hight);
    left: 0;
    height: var(--default-layout-category-hight);
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    z-index: 999;
`;

export const CategoryInner = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    white-space: nowrap; /* Không xuống dòng */
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
`;

export const TypeProduct = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    flex-shrink: 0;

    &:first-child {
        margin-left: -20px;
    }

    &:hover {
        cursor: pointer;
        text-shadow: 1px 0 #333;
    }
`;
