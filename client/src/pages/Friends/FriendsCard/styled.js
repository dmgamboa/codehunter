import styled from "styled-components";
import { Card } from "antd";

import theme from "../../../context/themes/main";

const { colors } = theme;

export const StyledCard = styled(Card)`
    border-radius: 1.5rem;
    line-height: 1;

    h2 {
        color: ${colors.primary};
        
        .username {
            color: black;
        }
    }

    .ant-card-body {
        padding: 0.5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 15% 70% 5%;
        column-gap: 0.5rem;
        align-items: center;
        justify-content: center;

        &::before {
            display: none;
        }
    }

    .ant-avatar {
        grid-column: 1;
        height: 100%;
        width: 100%;
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