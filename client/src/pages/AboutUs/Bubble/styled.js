import styled from "styled-components";
import { lighten } from "polished";

import theme from "../../../context/themes/main";

const { colors, fonts } = theme;

const StyledDrawer = styled.div`
    .site-drawer-render-in-current-wrapper {
        overflow: hidden;
        text-align: center;
    }

    .ant-drawer-content {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        height: 100vh;
           
        .darken-overlay div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: -1;
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        .ant-drawer-header {
            border-bottom: 2px solid #6B7690;
            background: none;

            .ant-drawer-title {
                font-size: clamp(1rem, 2vw, 1.75rem);
                color: #fff;
            }
        }
        .ant-drawer-body {
            .about-me {
                height: 100%;
                display: grid;
                grid-template:
                    "return" 5%
                    "general-info" 55%
                    "...." 10%
                    "contact-info" 10%
                    "name" 20%
                    / 100%;
                align-items: center;

                .return {
                    grid-area: return;
                    font-size: clamp(1rem, 2vw, 2rem);
                    justify-self: start;
                }

                .general-info{
                    grid-area: general-info;
                    line-height: 30px;

                    h4 {
                        margin-top: 2rem;
                        margin-bottom: 0.5rem;
                        font-family: ${fonts.headings};
                        font-size: clamp(1.5rem, 2vw, 3rem);
                        color: ${lighten(0.2, colors.primary)}; 
                    }

                    p {
                        font-size: clamp(1rem, 1vw, 2rem);
                        color: #fff;
                    }
                }

                .contact-info {
                    grid-area: contact-info;
                    display: flex;
                    justify-content: space-around;
                    align-self: center;
                    h2 {
                        color: #fff; 
                    }

                    .icon {
                        font-size: clamp(1rem, 2vw, 2rem);   
                    }

                    .icon > svg:hover {
                        font-size: clamp(1rem, 2vw, 2rem);
                    }
                }

                .name-info {
                    grid-area: name;
                    align-self: center;

                    h1 {
                        margin: 0 auto;
                        margin-bottom: 1rem;
                        padding: 0.5rem;
                        padding-bottom: 0.75rem;
                        line-height: 1;
                        width: 50%;
                        font-size: clamp(1.5rem, 4vw, 3rem);
                        font-weight: bold;
                        font-family: ${fonts.title};
                        text-transform: uppercase;
                        color: black;
                        mix-blend-mode: lighten;
                        background-color: ${lighten(0.2, colors.primary)};
                        border-radius: 1.5rem;
                    }
                }
            }
        }
    }

`;

const StyledBubble = styled.div`
    * {
        margin: 0;
    }
    :hover {
        opacity: 70%;
    }
    img {
        width: 50%;
        border-radius: 100%;
        max-width: 130px;
        max-height: 130px;
        :hover {
            opacity: 70%;
        }
    }
    .name {
        margin-top: 10px;
        text-align: center;
        font-size: 12pt;
    }
`;

export { StyledBubble, StyledDrawer };

