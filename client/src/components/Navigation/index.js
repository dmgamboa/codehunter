import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { TabBar } from "antd-mobile";

import { navRoutes } from "../../context/routers";

import NavContainer from "./styled";

const Navigation = ({ hidden }) => {
    const history = useHistory();
    let match = useRouteMatch();

    const [tab, setTab] = useState();

    const { Item } = TabBar;

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
                    selected={tab === path}
                    onPress={() => setTab(path)}
                />
            );
        })
    }

    return (
        <NavContainer>
            <TabBar hidden={hidden}>
                {getTabs(navRoutes)}
            </TabBar>            
        </NavContainer>
    );
}

export default Navigation;