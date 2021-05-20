import { useState } from "react";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";
import { Button, Switch } from "antd";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.less";

import { carouselItems } from "./constant";
import { Container, StyledSwiper, Image } from "./styled";

const WalkthroughScreen = () => {
    const history = useHistory();
    SwiperCore.use([Pagination, EffectFade]);

    const [carouselIndex, setCarouselIndex] = useState(0);
    const [skip, setSkip] = useState(localStorage.getItem("skip"));

    const handleRegister = () => {
        skip ? localStorage.setItem("skip", skip) : localStorage.removeItem("skip");
        history.push("/account/register");
    };

    const handleLogin = () => {
        skip ? localStorage.setItem("skip", skip) : localStorage.removeItem("skip");
        history.push("/account/login");
    };

    const handleSkip = (e) => {
        setSkip(e);
    };

    const renderCarouselItems = (items) => {
        return items.map(({ img }) => {
            return (
                <SwiperSlide key={img}>
                    <Image key={img} src={img} />
                </SwiperSlide>
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Container>
                <div className="top">
                    <StyledSwiper
                        centeredSlides="true"
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        pagination={{ dynamicBullets: true }}
                        onTransitionStart={(swiper) => setCarouselIndex(swiper.realIndex)}
                    >
                        {renderCarouselItems(carouselItems)}
                    </StyledSwiper>

                    <h1>{carouselItems[carouselIndex].heading}</h1>
                    <p>{carouselItems[carouselIndex].body}</p>
                </div>

                <div className="skip">
                    <Switch size="small" defaultChecked={skip} onChange={handleSkip} />
                    <span>Don&apos;t show me this again.</span>
                </div>

                <div className="btm">
                    <Button
                        className="register"
                        type="primary"
                        onClick={() => handleRegister()}
                        block
                    >
                        Join the hunt
                    </Button>
                    <span className="login" onClick={() => handleLogin()}>
                        Log In
                    </span>
                </div>
            </Container>
        </motion.div>
    );
};

export default WalkthroughScreen;
