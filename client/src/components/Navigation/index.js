import { useEffect, useState } from "react";
import { 
    useHistory,
    useParams,
    useLocation,
    Link
} from "react-router-dom";
import { TabBar } from "antd-mobile";
import Icon, { EllipsisOutlined } from "@ant-design/icons";

import {
    navTabRoutes,
    navDrawerRoutes,
    navlessPaths,
} from "../../context/routers";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { StyledDrawer } from "./styled";

const Navigation = () => {
    const history = useHistory();
    const { page } = useParams();
    let location = useLocation();

    const [tab, setTab] = useState();
    const [hidden, setHidden] = useState(true);
    const [drawer, setDrawer] = useState(false);

    const { Item } = TabBar;

    const handleToggleMore = () => {
        setDrawer(!drawer);
    }

    useEffect(() => {
        navlessPaths.includes(`/${page}`) ? setHidden(true) : setHidden(false);
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
                <Link
                    key={path}
                    to={path} 
                    className="drawer-item"
                >
                    {icon}
                    <span className="link">
                        {name}
                    </span>
                </Link>                    
            );
        })
    }

    return (
        <>
            <TabBar hidden={hidden}>
                {getTabs(navTabRoutes)}
                <Item
                    icon={<EllipsisOutlined />}
                    selectedIcon={<EllipsisOutlined />}
                    title="More"
                    selected={drawer}
                    onPress={handleToggleMore}
                />
            </TabBar>
            <StyledDrawer
                visible={drawer}
                onClose={handleToggleMore}
            >
                <Icon
                    className="logo"
                    component={Logo}
                />
                {getDrawerLinks(navDrawerRoutes)}
            </StyledDrawer>
        </>            
    );
};

export default Navigation;