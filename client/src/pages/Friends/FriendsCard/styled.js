import styled from "styled-components";
import { Card } from "antd";
import { rgba } from "polished";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

export const StyledCard = styled(Card)`
    border-radius: 1.5rem;
    border: none;
    border-bottom: 1px solid lightgray;
    line-height: 1;
    overflow: hidden;

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
        position: relative;
        padding: 0.5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 15% 70% 5%;
        column-gap: 0.5rem;
        align-items: center;
        justify-content: center;
        overflow: hidden;

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
        z-index: 99;
        background: none;
        justify-self: center;

        .anticon-ellipsis {
            font-size: 2.5rem;
        }
    }

    .ant-menu-submenu-title {
        padding: 0;
    }

    .ant-menu-submenu-arrow {
        display: none;
        border: none;
    }

    .circles {
        position: absolute;
        bottom: 0;
        right: 5%;
        transform: translate(50%, 50%);
        width: 150px;
        height: 150px;
        background: ${rgba(colors.secondary, 0.1)};
        z-index: 1;
        border-radius: 50%;
        filter: drop-shadow(0 0.25rem 0.15rem rgba(0, 0, 0, 0.3));

        &:before,
        &:after {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: inherit;
        }

        &:before {
            z-index: -2;
            right: 25px;
            bottom: 25px;
            width: 100px;
            height: 100px;
        }

        &:after {
            z-index: -1;
            right: 50px;
            bottom: 50px;
            width: 50px;
            height: 50px;
        }
    }
`;
