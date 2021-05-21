import styled from "styled-components";

export const StyledScanner = styled.div`
    position: absolute;
    top: calc(50% - 2rem);
    transform: translateY(-50%);
    width: 100%;

    section {
        width: 100%;
        height: 100vh;

        div {
            display: none;
        }
    }

    .confetti {
        z-index: 99;
    }
`;