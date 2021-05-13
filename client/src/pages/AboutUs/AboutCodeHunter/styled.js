import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
    width: 100vw;
    height: 20vh;
    padding: 1rem;
`;

export const StyledSwiper = styled(Swiper)`
    .swiper-pagination.swiper-pagination-bullets {
        .swiper-pagination-bullet-active-main {
            background: #005526;
        }
    }
`;

export const StyledPara = styled.div`
    padding: 1rem;
    font-size: 1rem;
    display: grid;
    grid-template:
        "title content" 100%
        / 20% 80%;
    justify-items: center;
    align-items: center;
    min-height: 120px;
    h4 {
        grid-area: title;
        color: #08497E;
        transform: rotate(-90deg);
        white-space: nowrap;
        text-align: center;
        font-weight: bold;
    }
    p {
        grid-area: content;
        text-align: right;
    }
`;