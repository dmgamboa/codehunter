import styled from "styled-components";

export const StyledMap = styled.div`
    z-index: 0;
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 100vw;
    height: 100vh;

    .gm-fullscreen-control,
    .gmnoprint,
    .gm-style-iw-d {
        display: none;
    }
`;