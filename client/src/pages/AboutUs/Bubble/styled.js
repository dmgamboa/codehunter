import styled from "styled-components";

const StyledDrawer = styled.div`
    .site-drawer-render-in-current-wrapper {
        overflow: hidden;
        text-align: center;
    }
    .ant-drawer-content {
        position: relative;
        color: #fff;
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
                font-size: 5vw;
                color: #fff;
            }
        }
        .ant-drawer-body {        
            .about-me {
                height: 100%;
                display: grid;
                grid-template:
                    "return" 5%
                    "general-info" 65%
                    "...." 10%
                    "contact-info" 10%
                    "name" 10%
                    / 100%;
                align-items: center;
                .return {
                    grid-area: return;
                    font-size: 10vw;
                    justify-self: start;
                }
                .general-info{
                    grid-area: general-info;
                    line-height: 30px;
                    h4 {
                        font-size: 10vw;
                        color: #08497E; 
                    }
                    p {
                        font-size: 5vw;
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
                        font-size: 5vw;   
                    }
                    .icon > svg:hover {
                        font-size: 7vw;
                    }
                }
                .name-info {
                    grid-area: name;
                    display: grid;
                    align-self: center;
                    h1 {
                        margin: 0;
                        color: #08497E;   
                        font-size: 10vw;
                        font-weight: bold;
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
        width: 30vw;
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

