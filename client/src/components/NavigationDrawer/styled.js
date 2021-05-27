import styled from "styled-components";
import { rgba } from "polished";
import { Drawer } from "antd";

import theme from "../../context/themes/main";
const { colors } = theme;

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-body {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .circles {
        position: absolute;
        top: -200px;
        right: 0px;
        width: 500px;
        height: 500px;
        background: ${rgba(colors.secondary, 0.1)};
        z-index: -3;
        border-radius: 50%;
        filter: drop-shadow(0 0.25rem 0.15rem rgba(0, 0, 0, 0.3));

        &:before, &:after {
            content: "";
            position: absolute;
            border-radius: 50%;
            top: 0;
            background: inherit;
        }
        
        &:before {
            z-index: -2;
            width: 450px;
            height: 450px;

        }

        &:after {
            z-index: -1;
            width: 400px;
            height: 400px;
        }
    }

    .top {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;

        .ant-avatar {
            width: 50px;
            height: 50px;
        }

            
        .text {
            display: flex;
            flex-direction: column;

            .name {
                font-size: clamp(1.25rem, 5vw, 2rem);
                font-weight: bold;
                color: ${colors.primary};
                text-shadow: 1px 2px ${rgba(colors.primary, 0.1)};
            }

            .points {
                font-size: 1rem;
            }
        }
    }

    #twitter-widget-0 {
        max-width: 220px;
    }

    .links {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1rem;

        .drawer-item {
            position: relative;
            margin-bottom: 1rem;
            cursor: pointer;

            &:hover:not(.active) {
                .link {
                    color: ${colors.secondary};
                }

                .anticon {
                    background: ${colors.secondary};
                }
            }

            &.active {
                .link {
                    color: white;
                }

                .anticon {
                    background: white;
                    color: ${colors.primary};
                }

                &:before {
                    content: "";
                    position: absolute;
                    top: -0.375rem;
                    left: -1rem;
                    height: calc(100% + 0.75rem);
                    width: 100%;
                    z-index: -1;
                    background: ${colors.secondary};
                    border-radius: 0 2rem 2rem 0;
                    filter: drop-shadow(0 0.25rem 0.15rem rgba(0, 0, 0, 0.4));
                }

                &.logout {
                    &:before {
                        background: ${colors.primary};
                    }
                }
            }
        }

        .main-links {
            display: flex;
            flex-direction: column;
        }

        .link {
            color: black;

            &.logout {
                flex: 1;
            }
        }

        .anticon {
            margin-right: 0.5rem;
            padding: 0.5rem;
            color: white;
            background: black;
            border-radius: 50%;
        }
    }

    .ant-drawer-close {
        color: ${colors.secondary};
    }
`;
