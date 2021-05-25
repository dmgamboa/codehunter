import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Tabs } from "antd";
import Icon from "@ant-design/icons";

import { ReactComponent as FriendsIcon } from "../../assets/icons/friendship.svg";
import SearchBar from "../../components/SearchBar";

import FriendsCard from "./FriendsCard";
import { tabs, testFriends } from "./constant";
import { Layout } from "./styled";

const Friends = () => {
    const { TabPane } = Tabs;

    const [friends, setFriends] = useState(testFriends);
    const [friendsLength, setFriendsLength] = useState(100);
    const [tab, setTab] = useState("all");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const handleSearch = (query) => {
        query !== search && setSearch(query);
    };

    const handleTabs = (tab) => {
        setTab(tab);
    };

    const handleScroll = () => {
        console.log("handleScroll");
    };

    const renderTabPanes = (tabs) => {
        return tabs.map((tab) => {
            return <TabPane key={tab.toLowerCase()} tab={tab} />;
        });
    };

    const renderFriendsList = (friends) => {
        return friends.map((friend) => {
            const status = tab === "all" ? "friends" : tab && tab;
            return <FriendsCard key={friend.name} friend={friend} status={status} />;
        });
    };

    useEffect(() => {
    }, [tab]);

    return (
        <Layout>
            <div className="top">
                <h1>
                    <Icon component={FriendsIcon} />
                    The Friend Zone
                </h1>
                <SearchBar handleSearch={handleSearch} />
                <Tabs defaultActiveKey="all" onChange={handleTabs}>
                    {renderTabPanes(tabs)}
                </Tabs>
            </div>
            {friends && (
                <InfiniteScroll
                    dataLength={friends.length}
                    next={handleScroll}
                    hasMore={true}
                    scrollableTarget="mainContent"
                    scrollThreshold={0.95}
                >
                    {renderFriendsList(friends)}
                </InfiniteScroll>
            )}
        </Layout>
    );
};

export default Friends;
