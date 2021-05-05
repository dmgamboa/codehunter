import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
    .swiper-pagination.swiper-pagination-bullets {
        left: 0;
        transform: translateX(0);

        .swiper-pagination-bullet-active-main {
            background: #005526;
        }
    }
`;

export const Image = styled.img`
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    max-width: 500px;
    object-fit: contain;
`;