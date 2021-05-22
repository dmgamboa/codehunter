import styled from "styled-components";

// hr -> display: grid
// top level -> flex

const PSStyle = styled.div`
    .content {
        text-align: center;
    }
    #digits {
        display: grid;
        grid-template-row: 5% 75% 5%;
        grid-template-column: 10% 50% 10%;
    }
    hr {
        border: 0.5px solid #bfbfbf;

    }
    #linerTop {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        width: 90%;
    }
    #linerBottom {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 4;
        width: 90%;
    }

    #pointsText {
        font-size: 110%;
    }

`;
export default PSStyle;
