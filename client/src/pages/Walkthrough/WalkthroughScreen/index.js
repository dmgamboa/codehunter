import { useEffect, useState } from "react";
import { Button } from "antd";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import { carouselItems } from "./constant";
import { Container, StyledSwiper, Image } from "./styled";
import React from "react";

const WalkthroughScreen = () => {
    
    const [carouselIndex, setCarouselIndex] = useState(0);

    SwiperCore.use([Pagination]);

    const renderCarouselItems = (items) => {
        return items.map(({ img }) => {
            return (
                <SwiperSlide key={img}>
                    <Image
                        key={img}
                        src={img}
                    />                    
                </SwiperSlide>
            );
        })
    }

    return (
        <Container>
            <StyledSwiper
                centeredSlides
                pagination={{dynamicBullets: true}}
                onTransitionStart={(swiper) => setCarouselIndex(swiper.realIndex)}
            >
                {renderCarouselItems(carouselItems)}
            </StyledSwiper>

            <h1>{carouselItems[carouselIndex].heading}</h1>
            <p>{carouselItems[carouselIndex].body}</p>

            <div className="btm">
                <Button className="register" type="primary" block>
                    Join the hunt
                </Button>
                <span className="login">Log In</span>                
            </div>
        </Container>
    );
}

export default WalkthroughScreen;