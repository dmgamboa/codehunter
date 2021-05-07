import { useHistory } from "react-router-dom";
import Icon from "@ant-design/icons";
import Particles from "react-particles-js";
import { motion } from "framer-motion";

import { particleParams, timeout } from "./constant";
import { ReactComponent as Logo } from "../../../assets/icons/logo-splash.svg";
import { Container, Content } from "./styled";

const SplashScreen = () => {
    const history = useHistory();

    // TODO
    // Configure navigation depending on user state
    const redirect = (timeout) => {
        // setTimeout(() => {
        //     history.push("/walkthrough");
        // }, timeout);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: timeout / 2000 }}
        >
            <Container>
                <Content>
                    <Icon className="logo" component={Logo} />
                    <h1 className="app-name">Code<b>Hunter</b></h1>
                    <h2 className="team-name">by 4bby</h2>                
                </Content>
                <Particles
                    width="100vw"
                    height="100vh"
                    params={particleParams}
                />
                {redirect(timeout)}
            </Container>            
        </motion.div>
    );
}

export default SplashScreen;