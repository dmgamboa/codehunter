import React, { useState, useEffect, useRef, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Icon, {
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
import { getRewards } from "../axios";

const RewardsScreen = () => {
    // for axios request
    const url = process.env.REACT_APP_SERVER;
    const { currentUser, getUID, userPoints } = useAuth();
    // console.log("currentUser", currentUser, "user points", userPoints);

    // to use variable userPoints in Auht.js

    // axios.post(`${url}rewards`, rewardsData);

    const { TabPane } = Tabs;
    const CheckableTag = Tag;

    const [category, setCategory] = useState(userPoints + " pts");
    const rewardTabPanes = ["All", "Food", "Accessories", "Activities", "Tech"];
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
        
        setSelectedTags(nextSelectedTags);
        // setQuery(pre)

    };

    // To add icons to filter tags
    const addIconFilterTags = (tag) => {
        // console.log("tag: ", tag);
        // let components = [];
        if (tag === "Online") {
            // console.log("online: ", tagsData)
            return <LaptopOutlined />;
        } else if (tag === "In-Store") {
            return <ShopOutlined />;
        } else if (tag === "Limited Time") {
            return <FieldTimeOutlined />;
        }
    };

    const [query, setQuery] = useState("all");
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [rewards, setRewards] = useState([]);
    const [rewardsLength, setRewardsLength] = useState(0);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {

        handleScroll();
    }, [query]);

    // useEffect(() => {
    //     handleScroll();
    // }, []);

    const handleScroll = async () => {
        setLoading(true);
        setError(false);
        console.log("exe handleScroll");
        try {
            setTimeout(async () => {
                const results = await getRewards({ category: query, pageNum: pageNumber });
                setRewards([...rewards, results]);
                // setRewards((prevRewards) => {
                //     return [...prevRewards, results];
                // });
                setHasMore(results.length > 0);
                setPageNumber(prevPageNumber => prevPageNumber + 1);

            }, 550);
        } catch (err) {
            if (err) {
                setError(true);
            }
        }
    };

    const handleCategory = (key) => {
        console.log("key: ", key);
        setRewards([]);
        setPageNumber(1);
        setQuery(key);
    };

    const addIconRewardCard = (availabilityArr) => {
        let icons = [];
        if (availabilityArr.includes("online")) {
            icons.push(<LaptopOutlined key="laptop" />);
        }
        if (availabilityArr.includes("in-store")) {
            icons.push(<ShopOutlined key="shop" />);
        }
        if (availabilityArr.includes("limited time")) {
            icons.push(<FieldTimeOutlined key="fieldtime" />);
        }
        return icons;
    };

    // Takes an array and creates RewardCard component for rendering
    const renderCards = () => {
        // console.log("rewards: ", rewards );
        return rewards.map((arr) => {
            console.log("renderCards");
            // Nested array
            return arr.map((rewardInfo, index) => {
                // console.log(rewardInfo.name);
                const icons = addIconRewardCard(rewardInfo.availability);
                return (
                    <div key={index}>
                        <RewardCard
                            key={rewardInfo._id}
                            name={rewardInfo.name}
                            description={rewardInfo.description}
                            cost={rewardInfo.cost}
                            availability={icons}
                        ></RewardCard>
                    </div>
                );
                // console.log("index: ", index, " name: ", rewardInfo.name);
            });
        });
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
                            icon={addIconFilterTags(tag)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </div>
            </Filters>

            <Tabs
                className="tabs"
                defaultActiveKey="all"
                tabBarExtraContent={category}
                onChange={(key) => handleCategory(key)}
                id="scrollableTabPane"
            >
                {rewardTabPanes.map((tabName) => {
                    return (
                        <TabPane
                            tab={tabName}
                            key={tabName.toLowerCase()}
                            
                        >
                            <InfiniteScroll
                                dataLength={rewards.length}
                                next={handleScroll}
                                hasMore={hasMore}
                                scrollableTarget="scrollableTabPane"
                                scrollThreshold={1}
                                // onScroll={handleScrollArrow}
                                loader={<div className="loadingIcon">{loading && <LoadingOutlined />}</div>}
                            >
                                {renderCards()}
                            </InfiniteScroll>
                        </TabPane>
                    );
                })}
            </Tabs>
        </Layout>
    );
};

export default RewardsScreen;
