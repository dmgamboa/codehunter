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

    const emphasize = (text) => {
        let para = [];
        text.split(" ").map((word) => {
            if ((word == "passion") | (word == "desire") | (word == "resolve")) {
                para.push(<span className="emphasize" key={word}>{word} </span>);
            } else {
                para.push(word + " ");
            }
        });
        return para;
    };

    const renderCarouselItems = (items) => {
        return items.map(({ text, heading, subheading, key }) => {
            return (
                <SwiperSlide key={key}>
                    <StyledPara>
                        {text ? <div className="text">{text ? emphasize(text) : ""}</div> : ""}
                        {heading ? <h4 className="heading">{heading}</h4> : ""}
                        {subheading ? <h4 className="subheading">{subheading}</h4> : ""}
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
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Container>
                <StyledSwiper
                    centeredSlides="true"
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    pagination={{ dynamicBullets: true }}
                >
                    {renderCarouselItems(carouselItems)}

                </StyledSwiper>
            </Container>
        </motion.div>
    );
};

export default AboutCodeHunter;
