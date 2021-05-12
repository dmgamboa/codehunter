// import { Image, Button, Space } from "antd";
import mountains from "../../../assets/aboutus/mountains.jpg";
import StyledBanner from "./StyledBanner";

const Banner = () => {
    return (
        <StyledBanner>
            <div className="banner">
                <img src={mountains} alt="Mountains"></img>
                <p>This is Us.</p>

                <div className="button lower-left">
                    <span className="head lower-left"></span>
                </div>

                <div className="buttonLR lower-right">
                    <span className="headLR lower-right"></span>
                </div>

                <div className="buttonUL upper-left">
                    <span className="headUL upper-left"></span>
                </div>

                <div className="buttonUR upper-right">
                    <span className="headUR upper-right"></span>
                </div>

            </div>
        </StyledBanner>
    );
};

export default Banner;
