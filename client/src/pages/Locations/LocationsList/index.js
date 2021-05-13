import LocationCard from "../../../components/LocationCard";

import { cardTabs } from "./constant";

const LocationsList = ({
    locations,
    handleTabs,
    handleDetailsOpen
}) => {    
    const tabs = cardTabs.map(tab => ({...tab, onPress: handleTabs}));

    const renderLocations = (locations) => {
        return locations.map(location => {
            return (
                <LocationCard
                    key={location.name}
                    location={location}
                    tabs={tabs}
                    onClick={handleDetailsOpen}
                />
            );
        })
    }

    return (
        <>  
            {locations ? renderLocations(locations) : "No locations found."}
        </>
    );
};

export default LocationsList;