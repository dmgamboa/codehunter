import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "antd";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'swiper/components/effect-fade/effect-fade.less';


import { carouselItems } from "./constant";
import { Container, StyledSwiper, Image } from "./styled";
import React from "react";

const WalkthroughScreen = () => {
    const history = useHistory();
    SwiperCore.use([Pagination, EffectFade]);

    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleRegister = () => {
        history.push("/register");
    }

    const handleLogin = () => {
        history.push("/login");
    }

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
                effect="fade"
                fadeEffect={{crossFade: true}}
                pagination={{dynamicBullets: true}}
                onTransitionStart={(swiper) => setCarouselIndex(swiper.realIndex)}
            >
                {renderCarouselItems(carouselItems)}
            </StyledSwiper>

            <h1>{carouselItems[carouselIndex].heading}</h1>
            <p>{carouselItems[carouselIndex].body}</p>

            <div className="btm">
                <Button
                    className="register"
                    type="primary"
                    onClick={() => handleRegister()}
                    block
                >
                    Join the hunt
                </Button>
                <span
                    className="login"
                    onClick={() => handleLogin()}
                >
                    Log In
                </span>                
            </div>
        </Container>
    );
}

export default WalkthroughScreen;