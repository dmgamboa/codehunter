import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
    border-radius: 1.5rem;
    line-height: 1;

    .ant-card-body {
        padding: 0.5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 10% 75% 5%;
        column-gap: 1rem;
        align-items: center;
        justify-content: center;

        &::before {
            display: none;
        }
    }

    .ant-avatar {
        grid-column: 1;
    }

    .text {
        grid-column: 2;
    }

    .ant-menu {
        grid-column: 3;
        border: none;
    }

    .ant-menu-submenu-title {
        padding: 0;
    }

    .ant-menu-submenu-arrow {
       
        display: none;
        border: none;
    }   
`;