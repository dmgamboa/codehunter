import styled from "styled-components";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

export const Layout = styled.div`
    flex: 1;
    width: 100%;

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 1rem 0.5rem;
        width: 75%;
        border-radius: 1.5rem;
        border: 1px solid lightgray;

        h1 {
            color: ${colors.primary};
        }

        .custom-avatar {
            font-size: 200%;
            margin-bottom: 0.5rem;
        }

        .status-btn {
            margin-top: 1rem;
            max-width: 250px;
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