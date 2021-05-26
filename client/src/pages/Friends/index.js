import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Tabs } from "antd";
import Icon from "@ant-design/icons";

import { ReactComponent as FriendsIcon } from "../../assets/icons/friendship.svg";
import SearchBar from "../../components/SearchBar";

import FriendsCard from "./FriendsCard";
import { tabs, testFriends } from "./constant";
import { Layout } from "./styled";
import { readFriends } from "./axios";
import { useAuth } from "../../context/Auth";

const Friends = () => {
    const history = useHistory();
    const { TabPane } = Tabs;

    const { getUser } = useAuth();

    const [friends, setFriends] = useState();
    const [friendsLength, setFriendsLength] = useState(100);
    const [tab, setTab] = useState("all");
    const [search, setSearch] = useState(null);
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

    const handleMenu = (key, id) => {
        switch (key) {
        case "view":
            history.push(`/profile/user/${id}`);
            break;
        case "add":
            break;
        case "pending":
            break;
        case "sent":
            break;
        }
    };

    const renderTabPanes = (tabs) => {
        return tabs.map((tab) => {
            return <TabPane key={tab.toLowerCase()} tab={tab} />;
        });
    };

    const renderFriendsList = (friends) => {
        return friends.map((friend) => {
            const status = tab === "all" ? "friend" : tab && tab;
            return (
                <FriendsCard
                    key={friend.name}
                    friend={friend}
                    status={status}
                    handleMenu={handleMenu}
                />
            );
        });
    };

    const handleFriends = async () => {
        const filters = {};

        if (search) {
            filters["$text"] = { $search: search };
        }

        const params = {
            userToken: getUser(),
            filters,
        };

        const friendsData = await readFriends(getUser(), params);
        setFriends(friendsData);
    };

    useEffect(() => {}, [tab]);

    useEffect(async () => {
        await handleFriends();
    }, []);

    useEffect(async () => {
        await handleFriends();
    }, [search]);

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
