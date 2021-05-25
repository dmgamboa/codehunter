import { useState } from "react";
import { ReactComponent as KissyDoge } from "../../assets/icons/doge/kiss.svg";

import { StyledContainer } from "./styled";

const Credits = () => {
    const [secret, setSecret] = useState(true);

    const handleSecret = () => {
        setSecret(!secret);
    };

    return (
        <StyledContainer>
            <KissyDoge className="kissy-doge"/>
            <h1>Thank you!</h1>
            <p>
                CodeHunter couldn&#39;t have been possible without the help of one or two (or quite
                a few!) of you:
            </p>
            <ul>
                <li>
                    <h3>StackOverflow</h3>For making our lives easier.
                </li>
                <li>
                    <h3>Icons</h3>All asset icons besides our logo and favicon from <a href="https://www.flaticon.com/">Flaticon</a>.
                </li>
                <li>
                    <h3>Scan</h3>Confetti animation from <a href="https://lottiefiles.com/35875-confetti-on-transparent-background">Lottie</a>.
                </li>
                <li>
                    <h3>About Us</h3>Image from <a href="https://unsplash.com/">Unsplash</a>.
                </li>
                <li>
                    <h3>About Us</h3>Avatars from <a href="https://picrew.me/">Picrew</a>.
                </li>
                <li>
                    <h3>Instructors</h3>Especially to Charles Tapp for supervising our team during the development of our project.
                </li>
                <li className={secret ? "secret" : "momo"} onClick={handleSecret}>
                    <h3>Jason Momoa</h3>For being such a doll.
                </li>
            </ul>
        </StyledContainer>
    );
};

export default Credits;
