import Icon from "@ant-design/icons";
import Particles from "react-particles-js";

import { particleParams } from "./constant";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { Container, Content } from "./styled";

const SplashScreen = () => {
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
        </Container>
    );
}

export default SplashScreen;