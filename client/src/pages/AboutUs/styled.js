import styled from "styled-components";
import clouds from "../../assets/aboutus/cloud.png";

const Styled= styled.div`
    * {
        font-family: 'Tomorrow', sans-serif;
    }
    .aboutus {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: url(${clouds});
        animation: animate 60s linear infinite;

        display: grid;
        grid-template:
            "banner" 30%
            "carousel" 25%
            "bubbles" 45%
            / 100%;
        justify-items: stretch;
    }
    @keyframes animate {
        0% {background-position: 0%}
        100% {background-position: 5440px;}
    }
    .banner {
        grid-area: banner;
    }
    .about-code-hunter {
        grid-area: carousel;
    }
    .bubble-container {
        grid-area: bubbles;
        height: 40vh;
        display: grid;
        grid-template:
            "bubble1 bubble2" 50%
            "bubble3 bubble4" 50%
            / 50% 50%;
        justify-items: center;
        grid-row-gap: 5px;

        name:nth-of-type(1) {
            grid-area: bubble1;
        }
        name:nth-of-type(2) {
            grid-area: bubble2;
        }
        name:nth-of-type(3) {
            grid-area: bubble3;
        }
        name:nth-of-type(4) {
            grid-area: bubble4;
        }
    }
`;

export default Styled;