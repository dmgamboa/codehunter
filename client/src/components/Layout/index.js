import { Container } from "./styled";
import Navigation from "../Navigation";

const MainLayout = ({ children }) => {

    return (
        <>
            <Container>
                {children}
            </Container>
            <Navigation />
        </>
    );
}

export default MainLayout;