import styled from "styled-components";
import clouds from "../../assets/aboutus/cloud.png";

const Styled= styled.div`
    height: 100%;
    background: url(${clouds});
    animation: animate 60s linear infinite;

    .aboutus {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
    }
    @keyframes animate {
        0% {background-position: 0%}
        100% {background-position: 5440px;}
    }
    .banner {
        /* Banner styles */
    }
    .about-code-hunter {
        /* Carousel styles */
    }
    .bubble-container {
        /* 4 bubble avatarc container styles */
        height: 100%;
        width: 100%; 
        display: grid;
        grid-template:
            "bubble1 bubble2" 50%
            "bubble3 bubble4" 50%
            / 50% 50%;
        justify-items: center;
        align-items: flex-end;
        grid-row-gap: 15px;

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