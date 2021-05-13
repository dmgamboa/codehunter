import { useState, useEffect } from "react";
import Icon, { CloseCircleOutlined, EllipsisOutlined } from "@ant-design/icons";

import { ReactComponent as GoogleMapsIcon } from "../../../assets/icons/google-maps.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";

import SearchBar from "../../../components/SearchBar";
import LocationCard from "../../../components/LocationCard";
import LocationDetails from "../../../components/LocationDetails";

import LocationsFilter from "../LocationsFilters";

import { Top } from "./styled";

const LocationsList = ({ locations }) => {    
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);

    const handleFilterToggle = () => {
        setFiltersVisible(!filtersVisible);
    }

    const handleDetailsOpen = () => {
        setDetailsVisible(true);
    }

    const handleDetailsClose = () => {
        setDetailsVisible(false);
    }

    const handleTabs = (tab) => {
        switch (tab) {
            case "directions":
                // Redirect to GMaps
                break;
            case "bookmark":
                // Add to Bookmarks
                break;
            case "details":
                setDetailsVisible(true);
                break;
            case "close":
                setDetailsVisible(false);
        }
    }

    const testLocations = [{
        name: "Telus World of Science",
        distance: 5,
        neighborhood: "Downtown",
        bookmarked: false,
        visited: true,
        type: "Museum / Gallery"
    }]

    const cardTabs = [
        {
            key: "directions",
            icon: <Icon component={GoogleMapsIcon}/>,
            onPress: handleTabs
        },
        {
            key: "bookmark",
            icon: <Icon component={BookmarkIcon}/>,
            onPress: handleTabs
        },
        {
            key: "details",
            icon: <EllipsisOutlined />,
            onPress: handleTabs
        },
    ];

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

    const detailsTabs = [
        {
            key: "directions",
            name: "Get Directions",
            icon: <Icon component={GoogleMapsIcon}/>,
            onPress: handleTabs
        },
        {
            key: "bookmark",
            name: `${testData.bookmarked ? "Remove from" : "Add to"} Bookmarks`,
            icon: <Icon component={BookmarkIcon}/>,
            onPress: handleTabs
        },
        {
            key: "close",
            name: "Close",
            icon: <CloseCircleOutlined />,
            onPress: handleTabs
        },
    ]

    const renderLocations = (locations) => {
        return locations.map(location => {
            return (
                <LocationCard
                    key={location.name}
                    location={location}
                    tabs={cardTabs}
                    onClick={handleDetailsOpen}
                />
            );
        })
    }

    return (
        <>  
            <Top>
                <SearchBar />
                <Icon
                    className="filter"
                    component={FilterIcon}
                    onClick={handleFilterToggle}
                />
            </Top>
            {testLocations && renderLocations(testLocations)}
            <LocationsFilter
                visible={filtersVisible}
                onClose={handleFilterToggle}
            />
            <LocationDetails
                visible={detailsVisible}
                onClose={handleDetailsClose}
                location={testData}
                tabs={detailsTabs}
            />
        </>
    );
};

export default LocationsList;