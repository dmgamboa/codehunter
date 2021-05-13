import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
    width: 100vw;
    height: 20vh;
    max-height: 100px;
    padding: 1rem 1rem 20px 1rem;
`;

export const StyledSwiper = styled(Swiper)`
    .swiper-pagination.swiper-pagination-bullets {
        .swiper-pagination-bullet-active-main {
            background: #005526;
        }
    }
`;

export const StyledPara = styled.div`
    margin: 1rem;
    font-size: 2vh;
    display: grid;
    text-align: center;
    align-items: center;
    min-height: 120px;
    .heading {
        color: #08497E;
        font-weight: bold;
    }
    .text {
        margin: 0;
        .emphasize {
            color: #005526;
            font-weight: bold;
        }
    }
`;