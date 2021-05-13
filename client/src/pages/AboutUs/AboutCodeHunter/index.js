
import { useState } from "react";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.less";

import { carouselItems } from "./constant";
import { Container, StyledSwiper, StyledPara } from "./styled";

const AboutCodeHunter = () => {
    SwiperCore.use([Pagination, EffectFade]);
    
    const [carouselIndex, setCarouselIndex] = useState(0);
    
    const renderCarouselItems = (items) => {
        return items.map(({ text }) => {
            return (
                <SwiperSlide key={text}>
                    <StyledPara className="removethis">
                        <h4>{carouselItems[carouselIndex].heading}</h4>
                        <p className="text">{text}</p>

                    </StyledPara>
                </SwiperSlide>
            );
        });
    };
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut"}}
        >
            <Container>
                <div className="top">

                    <StyledSwiper
                        centeredSlides="true"
                        effect="fade"
                        fadeEffect={{crossFade: true}}
                        pagination={{dynamicBullets: true}}
                        onTransitionStart={(swiper) => setCarouselIndex(swiper.realIndex)}
                    >
                        {renderCarouselItems(carouselItems)}
                    </StyledSwiper>

                </div>
            </Container>
        </motion.div>
    );
};

export default AboutCodeHunter;