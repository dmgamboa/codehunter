import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import CircleIconBtn from "../../../components/CircleIconBtn";
import LocationCard from "../../../components/LocationCard";
import Icon, { UnorderedListOutlined, LoadingOutlined } from "@ant-design/icons";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";
import { Layout, Filters } from "./styled";

import RewardCard from "../../../components/RewardCard";


import { Tag, Tabs } from "antd";


const RewardsScreen = () => {
    const { TabPane } = Tabs;
    
    const [category, setCategory] = useState("Extra Action");
    
    function log(e) {
        console.log(e);
    }
    return (
        <Layout>   
            <h1 className="title">CodeHunter Rewards</h1>

            <Filters className="filters">
                <div className="filterTags">
                    <Tag closable onClose={log}>
                        Tag 2
                    </Tag>
                    <Tag closable onClose={log}>
                        Tag 3
                    </Tag>

                </div>
                <Icon className="filterIcon" component={FilterIcon}>this is an icon</Icon>
            </Filters>

            <Tabs className="tabs" defaultActiveKey="1" tabBarExtraContent={category}>
                <TabPane tab="5000 pts" key="1">
                    {/* this is where we see rewards */}
                    
                    <RewardCard></RewardCard>
                    
                    <div className="loadingIcon"> 
                        <LoadingOutlined />
                    </div>
                </TabPane>
                <TabPane tab="0 Redeemed" key="2">
                    Under construction
                </TabPane>
 
            </Tabs>


            
        </Layout>
    );
};

export default RewardsScreen;