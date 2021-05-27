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
import { readFriends, readUsers } from "./axios";
import { useAuth } from "../../context/Auth";

const Friends = () => {
    const history = useHistory();
    const { TabPane } = Tabs;

    const { getUser } = useAuth();

    //const [friends, setFriends] = useState();
    const [friendsLength, setFriendsLength] = useState(100);
    const [tab, setTab] = useState("friends");
    const [search, setSearch] = useState("");
    const [friends, setFriends] = useState([]);
    const [page, setPage] = useState(1);
    const [hasData, setHasData] = useState(false);

    const handleSearch = (query) => {
        setSearch(query);
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
        case "incoming":
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
            const status = tab === "friends" ? "friend" : tab && tab;
            return (
                <FriendsCard
                    key={friend._id}
                    friend={friend}
                    status={status}
                    handleMenu={handleMenu}
                />
            );
        });
    };

    const handleFriends = async ({ tabsOverride }) => {
        const filters = {};
        const params = {
            userToken: getUser(),
            filters,
            tab: tabsOverride ? "" : tab,
        };

        console.log(params);

        if (search) {
            // Search bar used. Search for all users not in user's "friends" array.
            filters["$text"] = { $search: search };
        }

        const friendsData = await readUsers(params);
        setFriends(friendsData);
    };

    useEffect(async () => {
        await handleFriends({});
    }, []);

    useEffect(async () => {
        if (!search) {
            await handleFriends({});
        }
    }, [tab]);

    useEffect(async () => {
        search ? await handleFriends({tabsOverride: true}) : await handleFriends({});
    }, [search]);

    return (
        <Layout>
            <div className="top">
                <h1>
                    <Icon component={FriendsIcon} />
                    The Friend Zone
                </h1>
                <SearchBar handleSearch={handleSearch} />
                <Tabs defaultActiveKey="friends" onChange={handleTabs}>
                    {renderTabPanes(tabs)}
                </Tabs>
            </div>
            {(
                <InfiniteScroll
                    dataLength={friendsLength}
                    next={handleScroll}
                    hasMore={true}
                    scrollableTarget="mainContent"
                    scrollThreshold={0.95}
                >
                    {friends && renderFriendsList(friends)}
                </InfiniteScroll>
            )}
        </Layout>
    );
};

export default Friends;
