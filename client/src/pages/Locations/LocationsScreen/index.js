import { useState, useEffect } from "react";

import LocationsMap from "../LocationsMap";
import LocationsList from "../LocationsList";

const LocationsScreen = () => {

    const [view, setView] = useState("list");

    useEffect(() => {

    }, [view]);

    return (
        <>
            {view === "map" ? <LocationsMap /> : <LocationsList />}
        </>
    );
};

export default LocationsScreen;