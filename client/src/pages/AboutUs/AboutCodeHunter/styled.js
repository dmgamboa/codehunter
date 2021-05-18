import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
    max-height: 100px;
    margin-bottom: 40px;
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
    font-size: 1.8vh;
    display: grid;
    text-align: center;
    align-items: center;
    min-height: 120px;
    padding: 0px 1rem;
    .heading {
        color: #08497e;
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
