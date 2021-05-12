import styled from "styled-components";
import { Drawer } from "antd";

const StyledDrawer = styled(Drawer)`
    .ant-drawer-close {
        display: none;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 0;

        & > * {
            padding: 1rem;
        }

        img {
            padding: 0;
            max-height: 300px;
            object-fit: cover;
        }

        .detail {
            .icon {
                margin-right: 1rem;
                color: #005526;
            }
        }

        .top {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:after {
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                content: "";
                width: 95%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            }

            h1 {
                margin: 0;
                color: #08497E;
                font-size: clamp(1rem, 5vw, 2.5rem);
            }
        }

        .am-tab-bar {
            padding: 0.5rem;
        }

        .am-tab-bar-tab {
            gap: 0.5rem;
        }
    }
`;

export default StyledDrawer;