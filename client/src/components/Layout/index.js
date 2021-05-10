import { motion } from "framer-motion";

import { Layout, Content } from "./styled";
import Navigation from "../Navigation";

const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Content>{children}</Content>
            <Navigation />
        </Layout>
    );
};

export default MainLayout;
