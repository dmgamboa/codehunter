
import Banner from "./Banner";
import Bubble from "./Bubble";

import Styled from "./styled";

const AboutUs = () => {
    return (
        <Styled className="aboutus">
            <Banner className="banner"></Banner>

            <p>Some paragraph describing our team culture. Here’s some inspiring words...accomplish, action, ambition, believe, clarity, challenge, commitment, confidence</p>

            <div className="bubble-container">
                <Bubble className="name donna" name="Donna"></Bubble>
                <Bubble className="name" name="Pariya"></Bubble>
                <Bubble className="name" name="Josh"></Bubble>
                <Bubble className="name" name="Ethan"></Bubble>    
            </div>

        </Styled>
    );
};

export default AboutUs;