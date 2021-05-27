import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "antd";
import Icon from "@ant-design/icons";

import { ReactComponent as FriendsIcon } from "../../assets/icons/friendship.svg";
import SearchBar from "../../components/SearchBar";

import FriendsCard from "./FriendsCard";
import { tabs } from "./constant";
import { Layout } from "./styled";
import { readUsers, updateUser } from "./axios";
import { useAuth } from "../../context/Auth";

const Friends = () => {
    const history = useHistory();
    const { TabPane } = Tabs;
    const { getUser } = useAuth();

    const [tab, setTab] = useState("friends");
    const [search, setSearch] = useState("");
    const [friends, setFriends] = useState([]);

    const handleSearch = (query) => {
        setSearch(query);
    };

    const handleTabs = (tab) => {
        setSearch("");
        setTab(tab);
    };

    const handleMenu = (key, id) => {
        switch (key) {
        case "view":
            history.push(`/profile/${id}`);
            break;
        case "remove":
            handleFriend(id, true);
            break;
        default:
            handleFriend(id, false);
        }
    };

    const renderTabPanes = (tabs) => {
        return tabs.map((tab) => {
            return <TabPane key={tab.toLowerCase()} tab={tab} />;
        });
    };

    const renderFriendsList = (friends) => {
        return friends.map((friend) => {
            const status = search ? "" : tab === "friends" ? "friend" : tab && tab;
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
        search ? await handleFriends({ tabsOverride: true }) : await handleFriends({});
    }, [search]);

    // Handles adding friend, removing pending, accepting incoming, and removing friend.
    const handleFriend = async (friendID, removeFriend = false) => {
        const params = {
            userToken: getUser(),
            fields: "{}",
            friendID,
            removeFriend,
        };
        !removeFriend && delete params.removeFriend;

        await updateUser(params);
        search ? await handleFriends({ tabsOverride: true }) : await handleFriends({});
    };

    return (
        <Layout>
            <div className="top">
                <h1>
                    <Icon component={FriendsIcon} />
                    The Friend Zone
                </h1>
                <SearchBar handleSearch={handleSearch} />
                <Tabs defaultActiveKey="friends" onChange={handleTabs} activeKey={search ? "" : tab}>
                    {renderTabPanes(tabs)}
                </Tabs>
            </div>
            {friends && renderFriendsList(friends)}
        </Layout>
    );
};

export default Friends;
