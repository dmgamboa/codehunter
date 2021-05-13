import styled from "styled-components";
import mountains from "../../../assets/aboutus/mountains.jpg";

const StyledBanner = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    // Banner gradient and animation
    .banner {
        height: 30vh;
        background: linear-gradient(222deg, #08497e, #005526, #ffffff);
        background-size: 600% 600%;

        -webkit-animation: AnimationName 11s ease infinite;
        -moz-animation: AnimationName 11s ease infinite;
        animation: AnimationName 11s ease infinite;

        position: relative;
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
    // positioning the L shapes
    .corners {
        display: grid;
        grid-template: 
            "UL UR" 45%
            "usText usText" 10%
            "LL LR" 45%
            / 50% 50%;
        justify-items: center;
        align-items: center;
        height: 100%;
        
        // Adding opacity to mountain image
        ::before {
            content: '';
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background: url(${mountains});
            background-size: cover;
            opacity:  70%;
        }
    }
    .this-is-us {
        position: relative;
        margin: 0;
        grid-area: usText;
        color: #fff;
        font-size: 2.75rem;
        align-self: center;
    }
    .lower-left, .lower-right, .upper-left, .upper-right {
        display: block;
        background: #fff;
    }
    .head {
        height: 3rem;
        width: 1em; 
    }
    .button {
        height: 1em;
        width: 4em;
    }
    // Lower left L shape *****
    .lower-left {
        // Control L position
        grid-area: LL;
        position: absolute;
        bottom: -20px;
        left: -20px;
    }
    .headLL {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .buttonLL {
        position: relative;
    }
    // Lower right L shape *****
    .lower-right {
        // Control L position
        grid-area: LR;
        position: relative;
        bottom: -20px;
        left: 20px;
    }
    .headLR {
        position: absolute;
        bottom: 0;
        left: 42px;
    }
    .buttonLR {
        position: relative;
    }
    // Upper left L shape *****
    .upper-left {
        // Controls L position
        grid-area: UL;
        position: relative;
        bottom: 20px;
        left: -20px;
    }
    .headUL {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .buttonUL {
        position: relative;
    }
    // Upper right L shape *****
    .upper-right {
        // Controls L position
        grid-area: UR;
        position: relative;
        bottom: 20px;
        left: 20px;
    }
    .headUR {
        position: absolute;
        top: 0px;
        left: 42px;
    }
    .buttonUR {
        position: relative;
    }
`;

export default StyledBanner;
