import { useEffect, useState } from "react";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import { TabBar } from "antd-mobile";
import Icon, { EllipsisOutlined } from "@ant-design/icons";

import { useAuth } from "../../context/Auth";
import theme from "../../context/themes/main";
import { navTabRoutes, navDrawerRoutes, navlessPaths } from "../../context/routers";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { StyledDrawer, Container } from "./styled";

const Navigation = () => {
    const history = useHistory();
    const { page } = useParams();
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

    const getDrawerLinks = (link) => {
        return link.map(({ path, name, icon }) => {
            return (
                <Link key={path} to={path} className="drawer-item">
                    {icon}
                    <span className="link">{name}</span>
                </Link>
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
            <StyledDrawer visible={drawer} onClose={handleToggleMore}>
                <Icon className="logo" component={Logo} />
                {getDrawerLinks(navDrawerRoutes)}
            </StyledDrawer>
        </Container>
    );
};

export default Navigation;
