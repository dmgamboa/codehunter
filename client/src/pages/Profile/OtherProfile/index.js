import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "antd";
import { TrophyOutlined, EnvironmentFilled } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";

import CustomAvatar from "../../../components/CustomAvatar";

import { mockData } from "./constant";
import { Layout } from "./styled";

const OtherProfile = () => {
    const params = useParams();
    if (!params.id) {
        history.pushState("/profile");
    }

    const [userDetails, setUserDetails] = useState(mockData);

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

    const renderHistoryList = (list) => {
        return list.map(({location, points, date}) => {
            return (
                <div className="history-card" key={location}>
                    <h3 className="location">{location}</h3>
                    <span className="details">
                        <span className="points">{points} points</span>
                        <span className="date">{Intl.DateTimeFormat(navigator.language, { weekday: "short", month: "short", day: "numeric" }).format(date)}</span>                        
                    </span>
                </div>
            );
        });
    };

    return (
        <Layout>
            <div className="top">
                <CustomAvatar size="80px" photo={userDetails?.photoUrl} background="lightgray" />
                <h1 className="name">
                    {userDetails?.name?.first} {userDetails?.name?.last}
                </h1>
                <span className="points">
                    <TrophyOutlined /> {userDetails?.points} points
                </span>
                <Button className={`status-btn ${userDetails?.status}`}>
                    {userDetails?.status && renderStatusButton(userDetails?.status)}
                </Button>
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
                    `Looks like ${userDetails?.name?.first} hasn't discovered any codes yet. It's time to help them out!`
                )}
            </div>
        </Layout>
    );
};

export default OtherProfile;
