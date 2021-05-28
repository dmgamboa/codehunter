import styled from "styled-components";
import theme from "../../../context/themes/main";

const { colors } = theme;

export const StyledMap = styled.div`
    z-index: 0;
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;

    .gm-fullscreen-control,
    .gmnoprint,
    .gm-style-iw-d {
        display: none;
    }

    .marker {
        font-size: 2rem;
        color: ${colors.primary};
        filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3 ));
    }
`;