import { Button } from 'antd';
import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    background-color: #efefef;
    height: 2000px;
`;

export const ButtonMore = styled(Button)`
    &:hover {
        background-color: rgb(11, 116, 229);
        span {
            color: #fff;
        }
    }
`;
