import { useEffect, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { TabBar } from "antd-mobile";

import { navRoutes, navlessPaths } from "../../context/routers";

const Navigation = () => {
    const history = useHistory();
    const { page } = useParams();
    let location = useLocation();

    const [tab, setTab] = useState();
    const [hidden, setHidden] = useState(false);

    const { Item } = TabBar;

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
        })
    }

    return (
        <TabBar hidden={hidden}>
            {getTabs(navRoutes)}
        </TabBar>            
    );
}

export default Navigation;