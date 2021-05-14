import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../../context/themes/main";

const { colors } = theme;

const StyledDrawer = styled(Drawer)`
    .ant-drawer-header {
        .ant-drawer-title {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.primary};

            h1 {
                margin: 0;
                line-height: 1;
                color: ${colors.primary};
            }

            .anticon {
                margin-right: 0.5rem;
                font-size: 1.25rem;
            }
        }
    }

    .sort {
        display: flex;
        width: 100%;

        .ant-radio-button-wrapper {
            flex: 1;

            &:first-of-type {
                border-top-left-radius: 1.5rem;
                border-bottom-left-radius: 1.5rem;
            }

            &:last-of-type {
                border-top-right-radius: 1.5rem;
                border-bottom-right-radius: 1.5rem;
            }

            &.ant-radio-button-wrapper-checked {
                background: ${colors.secondary};
                border-color: ${colors.secondary};
                color: #FFF;
                font-weight: bold;
            }

            .anticon {
                margin-right: 0.5rem;
            }
        }
    }

    .ant-switch {
        &.ant-switch-checked {
            background: ${colors.secondary};
        }
    }

    .switch {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        .ant-row.ant-form-item {
            margin: 0;
        }

        .switch-label {
            margin-left: 0.5rem;
            font-size: 1rem;

            .anticon {
                margin-right: 0.25rem;
            }
        }

    }

    .ant-select {
        border-radius: 1.5rem;
    }


    .buttons {
        margin-top: 5rem;
        display: flex;

        button:first-of-type {
            margin-right: 1rem;
        }
    }
`;

export default StyledDrawer;
