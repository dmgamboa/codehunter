import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";

import NavContainer from "./styled";

const Navigation = ({ hidden }) => {

    const [tab, setTab] = useState("SAMPLE_FEATURE")

    const { Item } = TabBar;

    return (
        <NavContainer>
            <TabBar hidden={hidden}>
                <Item
                    icon={<SmileOutlined/>}
                    selectedIcon={<SmileFilled/>}
                    title="Sample"
                    selected={tab === "SAMPLE_FEATURE"}
                    onPress={() => setTab("SAMPLE_FEATURE")}
                />
            </TabBar>            
        </NavContainer>
    );
}

export default Navigation;