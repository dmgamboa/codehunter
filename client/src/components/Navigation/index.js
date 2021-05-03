import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TabBar } from "antd-mobile";

import { navRoutes } from "../../context/routers";

import NavContainer from "./styled";

const Navigation = ({ hidden }) => {

    const [tab, setTab] = useState(navRoutes[0].name);

    const { Item } = TabBar;

    const getTabs = (tabs) => {
        return tabs.map(({ name, icon, selectedIcon }) => {
            return (
                <Item
                    key={name}
                    icon={icon}
                    selectedIcon={selectedIcon}
                    title={name}
                    selected={tab === name}
                    onPress={() => setTab(name)}
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