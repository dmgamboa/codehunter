import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { TabBar } from "antd-mobile";

import { navRoutes, navlessPaths } from "../../context/routers";

import NavContainer from "./styled";

const Navigation = () => {
    const history = useHistory();
    const { page } = useParams();

    const [tab, setTab] = useState();
    const [hidden, setHidden] = useState(false);

    const { Item } = TabBar;

    useEffect(() => {
        if (navlessPaths.includes(`/${page}`)) {
            setHidden(true);
        }
    }, []);
    
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
        <NavContainer>
            <TabBar hidden={hidden}>
                {getTabs(navRoutes)}
            </TabBar>            
        </NavContainer>
    );
}

export default Navigation;