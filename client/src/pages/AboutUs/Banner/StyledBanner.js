import styled from "styled-components";

const StyledBanner = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Tomorrow&display=swap');
    * {

    }
    .flJFGQ {
        padding: 0 !important;
    }
    img {
        width: 100%;
        height: 30vh;
        opacity: 60%;

    }
    // Banner Gradient
    .banner {
        height: 30vh;
        background: linear-gradient(222deg, #08497e, #005526, #ffffff);
        background-size: 600% 600%;

        -webkit-animation: AnimationName 11s ease infinite;
        -moz-animation: AnimationName 11s ease infinite;
        animation: AnimationName 11s ease infinite;
    }

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 48%}
        50%{background-position:100% 53%}
        100%{background-position:0% 48%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 48%}
        50%{background-position:100% 53%}
        100%{background-position:0% 48%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 48%}
        50%{background-position:100% 53%}
        100%{background-position:0% 48%}
    }
    p {
        text-align: center;
        position: relative;
        top: -8.5rem;
        color: #fff;
        font-size: 1.75rem;
    }
    .lower-left, .lower-right, .upper-left, .upper-right {
        display: block;
        background: #fff;
    }
    // Lower left L shape
    .lower-left {
        position: relative;
        bottom: 120px;
        left: 30px;
    }
    .head {
        height: 60px;
        width: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .button {
        height: 20px;
        width: 80px;
        position: relative;
    }
    // Lower right L shape
    .lower-right {
        position: relative;
        bottom: 140px;
        left: 230px;
    }
    .headLR {
        height: 60px;
        width: 20px;
        position: absolute;
        bottom: 0;
        left: 60px;
    }
    .buttonLR {
        height: 20px;
        width: 80px;
        position: relative;
    }
    // Upper left L shape
    .upper-left {
        position: relative;
        bottom: 340px;
        left: 30px;
    }
    .headUL {
        height: 60px;
        width: 20px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .buttonUL {
        height: 20px;
        width: 80px;
        position: relative;
    }
    // Upper right L shape
    .upper-right {
        position: relative;
        bottom: 360px;
        left: 230px;
    }
    .headUR {
        height: 60px;
        width: 20px;
        position: absolute;
        top: 0px;
        left: 60px;
    }
    .buttonUR {
        height: 20px;
        width: 80px;
        position: relative;
    }
`;

export default StyledBanner;
