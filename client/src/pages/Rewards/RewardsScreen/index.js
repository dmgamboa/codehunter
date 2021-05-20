import React, { useState, useEffect } from "react";

import Icon, {
    UnorderedListOutlined,
    LoadingOutlined,
    ShopOutlined,
    LaptopOutlined,
    FieldTimeOutlined,
    GiftOutlined,
} from "@ant-design/icons";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";
import { Layout, Filters } from "./styled";

import RewardCard from "../../../components/RewardCard";

import { Tag, Tabs } from "antd";

import { useAuth } from "../../../context/Auth";

import axios from "axios";

const RewardsScreen = () => {
    
    // for axios request
    const url = process.env.REACT_APP_SERVER;
    const { currentUser, getUID, userPoints } = useAuth();
    console.log("currentUser", currentUser, "getUID", getUID(), "user points", userPoints);

    // to use variable userPoints in Auht.js

    // axios.post(`${url}rewards`, rewardsData);


    const { TabPane } = Tabs;

    const CheckableTag = Tag;
    const tagsData = {
        Online: "<LaptopOutlined/>",
        "In-Store": "<ShopOutlined/>",
        "Limited Time": "<FieldTimeOutlined>",
    };
    const tagsDataArr = ["Online", "In-Store", "Limited Time"];

    const [selectedTags, setSelectedTags] = useState([]);

    const [category, setCategory] = useState(userPoints + " pts");

    const handleFilterTag = (tag) => {
        const nextSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => {
                return t !== tag;
            })
            : [...selectedTags, tag];
        // console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    const addIcon = (tag) => {
        // console.log("tag: ", tag);
        // let components = [];
        if (tag === "Online") {
            // console.log("online: ", tagsData)
            // eslint-disable-next-line no-undef
            return <LaptopOutlined />;
        } else if (tag === "In-Store") {
            return <ShopOutlined />;
        } else if (tag === "Limited Time") {
            return <FieldTimeOutlined />;
        }
    };

    const getAllRewards = () => {
        console.log("geting all rewards, once sec plz");
    };

    // const useBookSearch = (query, pageNumber) => {

    // };

    // useEffect(() => {

    // }, [query, pageNumber]);

    return (
        <Layout>
            <h1 className="title">
                <GiftOutlined className="icon giftIcon" />
                CodeHunter Rewards
            </h1>

            <Filters className="filters">
                <div className="filterTags">
                    {tagsDataArr.map((tag) => (
                        <CheckableTag
                            key={tag}
                            // checked={}
                            onClick={() => handleFilterTag(tag)}
                            className={
                                selectedTags.includes(tag)
                                    ? "filterTagActive filterTag"
                                    : "filterTagInactive filterTag"
                            }
                            icon={addIcon(tag)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </div>
            </Filters>

            <Tabs className="tabs" defaultActiveKey="1" tabBarExtraContent={category}>
                <TabPane tab="All" key="1" onClick={getAllRewards}>
                    {/* this is where we see rewards */}

                    <RewardCard name="Cuisine Italiano" 
                        // description="smoothies and milkshakes on us!" 
                        description="Get 50% off" 
                        cost={500} 
                        category={<><ShopOutlined /><LaptopOutlined /></>}>
                        
                    </RewardCard>

                    <div className="loadingIcon">
                        <LoadingOutlined />
                    </div>
                </TabPane>
                <TabPane tab="Food" key="2">
                    
                </TabPane>
                <TabPane tab="Accessories" key="3">
                    
                </TabPane>
                <TabPane tab="Activities" key="4">
                    
                </TabPane>
                <TabPane tab="Tech" key="5">
                    
                </TabPane>
            </Tabs>
        </Layout>
    );
};

export default RewardsScreen;
