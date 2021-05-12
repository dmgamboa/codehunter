import { useState, useEffect } from "react";
import Icon, { CloseCircleOutlined } from "@ant-design/icons";

import { ReactComponent as GoogleMapsIcon } from "../../../assets/icons/google-maps.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

import LocationCard from "../../../components/LocationCard";
import LocationDetails from "../../../components/LocationDetails";
import { fromPairs } from "lodash";

const LocationsList = ({ locations }) => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const handleClick = () => {
        setDrawerVisible(true);
    }

    const handleDrawerClose = () => {
        setDrawerVisible(false);
    }

    const handleDetailsTabs = (tab) => {
        switch (tab) {
            case "directions":
                // Redirect to GMaps
                break;
            case "bookmark":
                // Add to Bookmarks
                break;
            case "close":
                setDrawerVisible(false);
        }
    }

    const testData = {
        name: "Telus World of Science",
        distance: 5,
        bookmarked: true,
        visited: false,
        details: {
            type: "Museum / Gallery",
            address: "1455 Quebec St, Vancouver, BC V6A 3Z7",
            hours: {
                status: "Open now",
                days: {
                    mon: ["08:00 AM", "10:00 PM"],
                    tue: ["08:00 AM", "10:00 PM"],
                    wed: ["08:00 AM", "10:00 PM"],
                    thu: ["08:00 AM", "10:00 PM"],
                    fri: ["08:00 AM", "10:00 PM"],
                    sat: [],
                    sun: [],
                }
            },
            phone: "6041234567",
            website: "https://www.scienceworld.ca"
        }
    }

    const tabs = [
        {
            key: "directions",
            name: "Get Directions",
            icon: <Icon component={GoogleMapsIcon}/>,
            onPress: handleDetailsTabs
        },
        {
            key: "bookmark",
            name: `${testData.bookmarked ? "Remove from" : "Add to"} Bookmarks`,
            icon: <Icon component={BookmarkIcon}/>,
            onPress: handleDetailsTabs
        },
        {
            key: "close",
            name: "Close",
            icon: <CloseCircleOutlined />,
            onPress: handleDetailsTabs
        },
    ]

    return (
        <>
            <button onClick={handleClick}>Open LocationDetails</button>
            <LocationDetails
                visible={drawerVisible}
                onClose={handleDrawerClose}
                location={testData}
                tabs={tabs}
            />
        </>
    );
};

export default LocationsList;