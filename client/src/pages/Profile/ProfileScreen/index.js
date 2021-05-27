import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Spin } from "antd";
import { TrophyOutlined, EnvironmentFilled, EditOutlined } from "@ant-design/icons";

import CustomAvatar from "../../../components/CustomAvatar";
import { useAuth } from "../../../context/Auth";

import ProfileEditDrawer from "../ProfileEditDrawer";
import { Layout } from "./styled";
import { readFriend, readFriendHistory, readHistory, updateUser } from "../axios";

const ProfileScreen = () => {
    const params = useParams();
    const { getUser, getUserData } = useAuth();

    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [editDetails, setEditDetails] = useState({});
    const [editDrawer, setEditDrawer] = useState(false);
    const [history, setHistory] = useState([]);

    const handleEditDrawer = () => {
        setEditDrawer(!editDrawer);
    };

    const handleEdit = async (values) => {
        setLoading(true);
        const token = getUser();
        const params = new FormData();
        params.append("userToken", token);
        params.append("fields", values.fields);
        params.append("avatar", values.avatar);
        await updateUser(params);
        handleUser();
        setLoading(false);
    };

    const handleUser = async () => {
        setLoading(true);
        if (!params.id) {
            const user = await getUserData();
            await setUserDetails(user);

            const { name, username, avatar } = user;
            await setEditDetails({ name: `${name.first} ${name.last}`, username, avatar });
        } else {
            const friend = await readFriend(params.id);

            setUserDetails(friend);
        }
        setLoading(false);
    };

    const handleHistory = async () => {
        if (!params.id) {
            const token = getUser();
            const history = await readHistory(token);
            setHistory(history);
        } else {
            const history = await readFriendHistory(params.id);
            setHistory(history);
        }
    };

    const renderStatusButton = (status) => {
        switch (status) {
        case "friend":
            return "Remove Friend";
        case "pending":
            return "Cancel Request";
        default:
            return "Add Friend";
        }
    };

    useEffect(() => {
        handleUser();
        handleHistory();
    }, [params.id]);

    const renderHistoryList = (list) => {
        return list.map(({ location, points, date }) => {
            return (
                <div className="history-card" key={location}>
                    <span className="circles"></span>
                    <h3 className="location">{location}</h3>
                    <span className="details">
                        <span className="points">{points} points</span>
                        <span className="date">
                            {Intl.DateTimeFormat(navigator.language, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            }).format(new Date(date))}
                        </span>
                    </span>
                </div>
            );
        });
    };

    return (
        <Layout>
            <Spin spinning={loading} style={{ width: "100%", flex: "1" }} />
            <ProfileEditDrawer
                visible={editDrawer}
                onClose={handleEditDrawer}
                initialValues={editDetails}
                onFinish={handleEdit}
            />
            <div className="top">
                <span className="circles"></span>
                <CustomAvatar size="80px" photo={userDetails?.avatar} background="lightgray" />
                <h1 className="name">
                    <span className="accent">{userDetails?.name?.first}</span>{" "}
                    {userDetails?.name?.last}
                </h1>
                <span className="points">
                    <TrophyOutlined /> {userDetails?.points} points
                </span>
                {params.id ? (
                    <Button className={`status-btn ${userDetails?.status}`}>
                        {userDetails?.status && renderStatusButton(userDetails?.status)}
                    </Button>
                ) : (
                    <Button type="secondary" onClick={handleEditDrawer}>
                        <EditOutlined /> Edit Profile
                    </Button>
                )}
            </div>
            <div className="history">
                <h2>
                    <EnvironmentFilled /> Recently Visited
                </h2>
                {history.length > 0 ? (
                    renderHistoryList(history)
                ) : (
                    <span className="no-history">
                        {`Looks like ${
                            params.id ? `${userDetails?.name?.first} hasn't` : "you haven't"
                        } discovered any codes yet. ${
                            params.id ? "It's time to help them out!" : "Go get hunting!"
                        }`}
                    </span>
                )}
            </div>
        </Layout>
    );
};

export default ProfileScreen;
