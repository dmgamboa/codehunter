import { useHistory } from "react-router-dom";
import Particles from "react-particles-js";
import { motion } from "framer-motion";

import { useAuth } from "../../../context/Auth";
import WindowHeight from "../../../context/themes/WindowSize";

import SplashLogo from "../SplashLogo";
import { particleParams, animationTimes } from "./constant";
import { Container, Content } from "./styled";

const SplashScreen = () => {
    const history = useHistory();
    const { getUser } = useAuth();
    const window = WindowHeight();

    const {
        orderInterval,
        traceDuration,
        fillDuration,
        textDelay
    } = animationTimes;
    
    const fillDelay = traceDuration + (orderInterval * 2);
    const timeout = Object.values(animationTimes).reduce((a, b) => a + b);
    
    const redirect = (timeout) => {
        setTimeout(() => {
            let path;

            if (getUser()) {
                path = "/locations";
            } else {
                path = localStorage.getItem("skip") ? "/account/login" : "/walkthrough";
            }

            history.push(path);
        }, timeout * 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fillDuration / 2 }}
        >
            <Container style={{ height: window.height, width: window.width }}>
                <Content>
                    <SplashLogo
                        className="logo"
                        orderInterval={orderInterval}
                        traceDuration={traceDuration}
                        fillDelay={fillDelay}
                        fillDuration={fillDuration}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: fillDelay + textDelay, duration: fillDuration - textDelay}}
                    >
                        <h1 className="app-name">Code<strong>Hunter</strong></h1>
                        <h2 className="team-name">by 4bby</h2>  
                    </motion.div>
                </Content>
                <Particles
                    width="100vw"
                    height={window.height}
                    params={particleParams}
                />
                {redirect(timeout)}
            </Container>            
        </motion.div>
    );
};

export default SplashScreen;