import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "antd";
import { TrophyOutlined, EnvironmentFilled, EditOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";

import CustomAvatar from "../../../components/CustomAvatar";
import { useAuth } from "../../../context/Auth";

import { Layout } from "./styled";
import { readUser } from "../axios";

const ProfileScreen = () => {
    const params = useParams();
    const { getUserData, getUser } = useAuth();

    const [userDetails, setUserDetails] = useState({});

    const renderStatusButton = (status) => {
        switch (status) {
        case "friend":
            return "Remove Friend";
        case "pending":
            return "Accept Request";
        case "sent":
            return "Cancel Request";
        default:
            return "Add Friend";
        }
    };

    useEffect(async () => {
        if (!params.id) {
            const token = getUser();
            const user = getUserData();
            setUserDetails(user);
        }
    }, []);

    const renderHistoryList = (list) => {
        return list.map(({ location, points, date }) => {
            return (
                <div className="history-card" key={location}>
                    <h3 className="location">{location}</h3>
                    <span className="details">
                        <span className="points">{points} points</span>
                        <span className="date">
                            {Intl.DateTimeFormat(navigator.language, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            }).format(date)}
                        </span>
                    </span>
                </div>
            );
        });
    };

    return (
        <Layout>
            <div className="top">
                <span className="circles"></span>
                <CustomAvatar size="80px" photo={userDetails?.photoUrl} background="lightgray" />
                <h1 className="name">
                    <span className="accent">{userDetails?.name?.first}</span> {userDetails?.name?.last}
                </h1>
                <span className="points">
                    <TrophyOutlined /> {userDetails?.points} points
                </span>
                {params.id ? (
                    <Button className={`status-btn ${userDetails?.status}`}>
                        {userDetails?.status && renderStatusButton(userDetails?.status)}
                    </Button>
                ) : (
                    <Button type="secondary">
                        <EditOutlined /> Edit Profile
                    </Button>
                )}
            </div>
            <div className="history">
                <h2>
                    <EnvironmentFilled /> Recently Visited
                </h2>
                {userDetails.history ? (
                    <InfiniteScroll dataLength={userDetails.history}>
                        {renderHistoryList(userDetails.history)}
                    </InfiniteScroll>
                ) : (
                    <span className="no-history">
                        {`Looks like ${params.id ? `${userDetails?.name?.first} hasn't` : "you haven't"} discovered any codes yet. ${params.id ? "It's time to help them out!" : "Go get hunting!"}`}
                    </span>
                )}
            </div>
        </Layout>
    );
};

export default ProfileScreen;
