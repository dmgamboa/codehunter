import styled from "styled-components";

const Styled= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Tomorrow&display=swap');
    * {
        font-family: 'Tomorrow', sans-serif;
    }
    .banner {
        margin-bottom: 60px;
    }
    p {
        margin-bottom: 50px;
        text-align: center;
    }
    .bubble-container {
        display: grid;
        grid-template:
            "bubble1 bubble2" 50%
            "bubble3 bubble4" 50%
            / 50% 50%;
        justify-items: center;
        grid-row-gap: 20px;

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