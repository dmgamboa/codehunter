import { useState, useEffect } from "react";

import LocationCard from "../../../components/LocationCard";
import LocationDetails from "../../../components/LocationDetails";

const LocationsList = ({ locations }) => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const handleClick = () => {
        setDrawerVisible(true);
    }

    const handleDrawerClose = () => {
        setDrawerVisible(false);
    }

    const testData = {
        name: "Telus World of Science",
        distance: 5,
        details: {
            type: "Museum / Gallery",
            address: "1455 Quebec St, Vancouver, BC V6A 3Z7",
            hours: {
                monday: ["08:00 AM", "10:00 PM"],
                tuesday: ["08:00 AM", "10:00 PM"],
                wednesday: ["08:00 AM", "10:00 PM"],
                thursday: ["08:00 AM", "10:00 PM"],
                friday: ["08:00 AM", "10:00 PM"],
                saturday: [],
                sunday: [],
            },
            phone: "6041234567",
            website: "https://www.scienceworld.ca"
        }
    }

    return (
        <>
            <button onClick={handleClick}>Open LocationDetails</button>
            <LocationDetails
                visible={drawerVisible}
                onClose={handleDrawerClose}
                location={testData}
            />
        </>
    );
};

export default LocationsList;