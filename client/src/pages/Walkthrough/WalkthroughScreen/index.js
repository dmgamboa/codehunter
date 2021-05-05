import { Carousel, Button } from "antd-mobile";

import { carouselItems } from "./constant";
import { Image } from "./styled";

const WalkthroughScreen = () => {
    
    const renderCarouselItems = (items) => {
        return items.map(({ img, heading, body }) => {
            return (
                <>
                    <img
                        src={img}
                        onLoad={() => window.dispatchEvent(new Event("resize"))}
                    />
                    <h1>{heading}</h1>
                    <p>{body}</p>
                </>
            );
        })
    }

    return (
        <>
            <Carousel autoplay={false}>
                {renderCarouselItems(carouselItems)}
            </Carousel>

            <Button type="primary">
                Join the hunt
            </Button>

            <span className="login">Log In</span>
        </>
    );
}

export default WalkthroughScreen;