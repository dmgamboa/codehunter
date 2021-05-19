import { Layout, Content } from "./styled";
import Navigation from "../Navigation";

const MainLayout = ({ children }) => {
    return (
        <Layout id="layout">
            <Content id="mainContent">{children}</Content>
            <Navigation />
        </Layout>
    );
};

export default MainLayout;
