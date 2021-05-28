import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .btm {
        margin-bottom: 2rem;
    }

    .login, .register {
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            font-weight: bold;
        }
    }

    .login {
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
    }

    .register {
        &:hover {
            background: #005526;
        }
    }

    .swiper-slide {
        width: 100% !important;
    }

    .ant-switch {
        margin-right: 0.5rem;
    }

    .skip {
        margin-bottom: 1rem;
    }
`;

export const StyledSwiper = styled(Swiper)`
    .swiper-pagination.swiper-pagination-bullets {
        left: 0;
        transform: translateX(0);
        text-align: left;

        .swiper-pagination-bullet-active-main {
            background: #005526;
        }
    }
`;

export const Image = styled.img`
    padding: 2rem;
    margin-bottom: 1rem;
    max-width: 100%;
    height: 65vh;
    object-fit: contain;
`;