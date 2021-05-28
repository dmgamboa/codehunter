import { Layout, Content } from "./styled";
import Navigation from "../Navigation";
import WindowSize from "../../context/themes/WindowSize";

const MainLayout = ({ children }) => {
    const window = WindowSize();

    return (
        <Layout id="layout" style={{ height: window.height}}>
            <Content id="mainContent">{children}</Content>
            <Navigation />
        </Layout>
    );
};

export default MainLayout;
