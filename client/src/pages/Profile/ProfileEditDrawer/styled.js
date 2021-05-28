import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-title {
        font-family: ${fonts.headings};
        font-size: clamp(1.5rem, 2vw, 2rem);

        .anticon {
            color: ${colors.primary};
            margin-right: 0.5rem;
        }
    }

    .buttons {
        display: flex;

        button:first-of-type {
            margin-right: 1rem;
        }
    }

    .avatar-upload {
        display: flex;

        img {
            margin-left: 1rem;
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
    }

    .upload-btn {
        position: relative;
        padding: 1rem;
        width: 100px;
        height: 100px;
        border: 1px dashed lightgray;
        background: "gray";
        margin-bottom: 1rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        &:hover {
            border: 1.5px dashed ${colors.secondary};
            font-weight: bold;

            .anticon {
                font-size: 1rem;
            }
        }

        .anticon {
            margin-bottom: 0.5rem;
            color: ${colors.secondary};
        }
    }

    input[type="file"] {
            display: none;
    }
`;
