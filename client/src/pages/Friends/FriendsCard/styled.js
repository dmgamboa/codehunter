import styled from "styled-components";
import { Card } from "antd";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

export const StyledCard = styled(Card)`
    border-radius: 1.5rem;
    border: none;
    line-height: 1;

    h2 {
        display: flex;
        align-items: center;
        color: ${colors.primary};
        font-size: clamp(1.25rem, 3vw, 1.5rem);
        
        .username {
            margin-left: 0.5rem;
            color: rgba(0, 0, 0, 0.5);
            font-size: 0.6em;
            font-family: ${fonts.body};
            text-transform: uppercase;

            &::before {
                content: "(";
                filter: opacity(0.5);
                margin-right: 0.25rem;
            }

            &::after {
                content: ")";
                filter: opacity(0.5);
                margin-left: 0.25rem;
            }
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