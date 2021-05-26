import styled from "styled-components";
import { rgba } from "polished";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

export const Layout = styled.div`
    flex: 1;
    width: 100%;

    .top {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 1rem 0.5rem;
        width: 85%;
        border-radius: 1.5rem;
        border: 1px solid lightgray;
        background: ${rgba(colors.primary, 0.1)};
        overflow: hidden;

        h1 {
            margin: 0;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
        }

        .custom-avatar {
            font-size: 200%;
            margin-bottom: 1rem;
        }

        .points {
            .anticon {
                margin-top: 0.5rem;
                color: ${colors.secondary};
            }
        }

        button {
            margin-top: 1rem;
            max-width: 250px;
        }

        .status-btn {
            color: white;
            background: ${colors.primary};

            &.friend {
                background: none;
                border: 1px solid ${colors.accent};
                color: ${colors.accent};

                .anticon {
                    color: ${colors.accent};
                }
            }
        }

        .circles {
            position: absolute;
            top: 100%;
            left: 100%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: ${rgba(colors.secondary, 0.1)};
            z-index: -3;
            border-radius: 50%;
            filter: drop-shadow(0 0.25rem 0.15rem rgba(0, 0, 0, 0.3));

            &:before, &:after {
                content: "";
                position: absolute;
                border-radius: 50%;
                top: 10%;
                left: 10%;
                background: inherit;
            }
            
            &:before {
                z-index: -2;
                width: 350px;
                height: 350px;

            }

            &:after {
                top: 20%;
                left: 20%;
                z-index: -1;
                width: 300px;
                height: 300px;
            }
        }
    }

    .history {
        margin-top: 2rem;

        .anticon {
            color: ${colors.secondary};
        }

        .history-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid lightgray;
            border-radius: 1.5rem;
            margin-bottom: 0.5rem;

            .details {
                display: flex;
                flex-direction: column;
                text-align: right;
            }

            .location {
                font-size: 1.25rem;
                color: ${colors.primary};
            }

            .points {
                margin-bottom: 0.5rem;
            }
        }
    }
`;