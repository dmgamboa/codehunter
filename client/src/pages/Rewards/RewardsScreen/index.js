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
    console.log("currentUser", currentUser, "user points", userPoints);

    // to use variable userPoints in Auht.js

    // axios.post(`${url}rewards`, rewardsData);

    const { TabPane } = Tabs;
    const CheckableTag = Tag;

    const [category, setCategory] = useState(userPoints + " pts");

    const tagsData = {
        Online: "<LaptopOutlined/>",
        "In-Store": "<ShopOutlined/>",
        "Limited Time": "<FieldTimeOutlined>",
    };
    const tagsDataArr = ["Online", "In-Store", "Limited Time"];
    const [selectedTags, setSelectedTags] = useState([]);
    const handleFilterTag = (tag) => {
        const nextSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => {
                return t !== tag;
            })
            : [...selectedTags, tag];
        // console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    // To add icons to filter tags
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

    // const useBookSearch = (query, pageNumber) => {

    // };
    const [query, setQuery] = useState("all");
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [rewards, setRewards] = useState([]);
    const [erros, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        console.log("query: " + JSON.stringify(query));
        
        axios
            // Equivalent to params sent through url
            .get(`${url}rewards/getRewards`, { params: {category: query, skip: pageNumber} }) 
            .then((res) => { 
                setRewards(prevRewards => {
                    return [...prevRewards, res.data];
                });
                setHasMore(res.data.length > 0);
                console.log("response", res.data); 
                setLoading(false);
            })
            .catch((err) => { 
                setError(err);
                console.log("axios err: ", err); 
            });
    }, [query, pageNumber]);

    const handleCategory = (key) => {
        if (key === "1") {
            setQuery("all");
        } else if (key === "2") {
            setQuery("food");
        } else if (key === "3") {
            setQuery("accessories");
        } else if (key === "4") {
            setQuery("activities");
        } else if (key === "5") {
            setQuery("tech");
        }
        console.log("key: " + key);
    };

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

            <Tabs className="tabs" defaultActiveKey="1" tabBarExtraContent={category} onChange={(key) => handleCategory(key)}>
                <TabPane tab="All" key="1">
                    {/* this is where we see rewards */}

                    {/* <RewardCard
                        name="Cuisine Italianoasdasdasda"
                        // description="smoothies and milkshakes on us!"
                        description="Get 50% offasddasdadsaadads"
                        cost={500}
                        category={
                            <>
                                <ShopOutlined />
                                <LaptopOutlined />
                            </>
                        }
                    ></RewardCard> */}
                    {rewards.map(reward => {
                        console.log("building card, name: " + reward.name);

                        //TODO: whats the best way to construct icons components from category list

                        return (<><RewardCard name={reward.name} description={reward.description} cost={reward.cost} c></RewardCard></>);
                    })}

                    <div className="loadingIcon">
                        {loading && <LoadingOutlined />}
                    </div>
                </TabPane>
                <TabPane tab="Food" key="2"></TabPane>
                <TabPane tab="Accessories" key="3"></TabPane>
                <TabPane tab="Activities" key="4"></TabPane>
                <TabPane tab="Tech" key="5"></TabPane>
            </Tabs>
        </Layout>
    );
};

export default RewardsScreen;
