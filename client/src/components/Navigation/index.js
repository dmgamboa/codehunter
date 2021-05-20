import { useEffect, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { EllipsisOutlined } from "@ant-design/icons";

import { useAuth } from "../../context/Auth";
import theme from "../../context/themes/main";
import { navTabRoutes, navDrawerRoutes, navlessPaths } from "../../context/routers";
import NavigationDrawer from "../NavigationDrawer/";

import { Container } from "./styled";

const Navigation = () => {
    const history = useHistory();
    const { page, subpage } = useParams();
    let location = useLocation();

    const { getUser } = useAuth();
    const isLoggedIn = getUser();

    const [tab, setTab] = useState();
    const [hidden, setHidden] = useState(true);
    const [drawer, setDrawer] = useState(false);

    const { Item } = TabBar;
    const { colors } = theme;

    const handleToggleMore = () => {
        setDrawer(!drawer);
    };

    useEffect(() => {
        navlessPaths.includes(`/${page}`) ? setHidden(true) : setHidden(false);
        !isLoggedIn && setHidden(true);
    }, [location]);

    useEffect(() => {
        history.push(tab);
    }, [tab]);

    const getTabs = (tabs) => {
        return tabs.map(({ path, name, icon, selectedIcon }) => {
            return (
                <Item
                    key={path}
                    icon={icon}
                    selectedIcon={selectedIcon}
                    title={name}
                    selected={tab === path || `/${page}` === path}
                    onPress={() => setTab(path)}
                />
            );
        });
    };

    return (
        <Container>
            <TabBar hidden={hidden} tintColor={colors.primary}>
                {getTabs(navTabRoutes)}
                <Item
                    icon={<EllipsisOutlined />}
                    selectedIcon={<EllipsisOutlined />}
                    title="More"
                    selected={drawer}
                    onPress={handleToggleMore}
                />
            </TabBar>
            <NavigationDrawer
                visible={drawer}
                onClose={handleToggleMore}
                links={navDrawerRoutes}
                page={`/${page}`}
            />
        </Container>
    );
};

export default Navigation;
