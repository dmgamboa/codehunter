import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    LoadingOutlined,
    ShopOutlined,
    LaptopOutlined,
    FieldTimeOutlined,
    GiftOutlined,
} from "@ant-design/icons";
import { Layout, Filters } from "./styled";
import { Tag, Tabs } from "antd";

import RewardCard from "../RewardCard";
import { useAuth } from "../../../context/Auth";
import { getRewards } from "../axios";

const RewardsScreen = () => {

    const { userPoints } = useAuth();

    const { TabPane } = Tabs;
    const CheckableTag = Tag;
    const rewardTabPanes = ["All", "Food", "Accessories", "Activities", "Tech"];

    // eslint-disable-next-line no-unused-vars
    const [category, setCategory] = useState(userPoints + " pts");

    // Querying and infinite scroll
    const [categoryQuery, setCategoryQuery] = useState("all");
    const [availQuery, setAvailQuery] = useState(["Online", "In-Store", "Limited Time"]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [rewards, setRewards] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(false);

    const tagsDataArr = ["Online", "In-Store", "Limited Time"];

    // To add icons to filter tags
    const addIconFilterTags = (tag) => {
        if (tag === "Online") {
            return <LaptopOutlined />;
        } else if (tag === "In-Store") {
            return <ShopOutlined />;
        } else if (tag === "Limited Time") {
            return <FieldTimeOutlined />;
        }
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

    // Handle click on filter tags
    const handleFilterTag = (tag) => {
        setPageNumber(1);
        setRewards([]);

        const nextSelectedTags = availQuery.includes(tag)
            ? availQuery.filter((t) => {
                return t !== tag;
            })
            : [...availQuery, tag];

        setAvailQuery(nextSelectedTags);
    };

    const handleScroll = async () => {
        setLoading(true);
        setError(false);

        try {
            setTimeout(async () => {
                const results = await getRewards({
                    category: categoryQuery,
                    availability: availQuery,
                    pageNum: pageNumber,
                });

                setRewards([...rewards, results]);
                setHasMore(results.length > 0);
                setPageNumber((prevPageNumber) => prevPageNumber + 1);
            }, 550);
        } catch (err) {
            if (err) {
                setError(true);
            }
        }
    };

    // Handle clicks on categories (selecting tab)
    const handleCategory = (key) => {
        setRewards([]);
        setPageNumber(1);
        setCategoryQuery(key);
    };

    // Takes an array and creates RewardCard component for rendering
    const renderCards = () => {
        return rewards.map((arr) => {
            // Rewards has possible nested arrays
            return arr.map((rewardInfo, index) => {
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
            });
        });
    };

    useEffect(() => {
        handleScroll();
    }, [categoryQuery, availQuery]);

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
                                availQuery.includes(tag)
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
                            {
                                <InfiniteScroll
                                    dataLength={rewards.length}
                                    next={handleScroll}
                                    hasMore={hasMore}
                                    scrollableTarget="scrollableTabPane"
                                    scrollThreshold={0.95}
                                    // onScroll={handleScrollArrow}
                                    loader={
                                        <div className="loadingIcon">
                                            {loading && <LoadingOutlined />}
                                        </div>
                                    }
                                    endMessage={
                                        <p style={{ textAlign: "center" }}>
                                            <b>Check back soon for new rewards!</b>
                                        </p>
                                    }
                                >
                                    {renderCards()}
                                </InfiniteScroll>
                            }
                        </TabPane>
                    );
                })}
            </Tabs>
        </Layout>
    );
};

export default RewardsScreen;
