import { useHistory } from "react-router-dom";
import Icon from "@ant-design/icons";
import Particles from "react-particles-js";

import { particleParams, timeout } from "./constant";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { Container, Content } from "./styled";

const SplashScreen = () => {
    const history = useHistory();

    // TODO
    // Configure navigation depending on user state
    const redirect = (timeout) => {
        setTimeout(() => {
            history.push("/walkthrough");
        }, timeout);
    }

    return (
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
    );
};

export default SplashScreen;