import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../context/themes/main";

const { colors } = theme;

const StyledDrawer = styled(Drawer)`
    .ant-drawer-close {
        display: none;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 0;
        max-height: 95%;

        & > * {
            padding: 0.75rem 1rem;
        }

        img {
            padding: 0;
            height: clamp(100px, 30vh, 600px);
            object-fit: cover;
        }

        .detail {
            .icon {
                margin-right: 1rem;
                color: ${colors.secondary};
            }
        }

        .top {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;

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
                color: ${colors.primary};
                font-size: clamp(1rem, 5vw, 2.5rem);
            }
        }

        .hours {
            .hours-list {
                column-count: 2;
                margin: 0.5rem 0 0 2rem;
                font-size: clamp(0.6rem, 3vw, 1rem);
            }

            .hour {
                display: flex;

                .day {
                    flex: 1;
                    font-weight: bold;
                }

                .time {
                    flex: 3;
                }
            }
        }

        .am-tab-bar {
            padding: 0.25rem;
        }

        .am-tab-bar-tab {
            gap: 0.25rem;
        }
    }
`;

export default StyledDrawer;