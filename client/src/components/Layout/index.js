import { Layout } from "antd";

import Navigation from "./navigation";

const { Content } = Layout;

const MainLayout = ({ children }) => {

    return (
        <>
            <Layout>
                <Content>
                    {children}
                </Content>
            </Layout>
            <Navigation />
        </>
    );
}

export default MainLayout;