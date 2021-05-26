import styled from "styled-components";

export const StyledScanner = styled.div`
    position: absolute;
    top: calc(50% - 2rem);
    transform: translateY(-50%);
    width: 100%;

    &.error {
        position: relative;

        section {
            display: none;
        }
    }

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

    .overlay {
        position: absolute;
        z-index: 99;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 2rem;
        width: 100%;
    }
`;