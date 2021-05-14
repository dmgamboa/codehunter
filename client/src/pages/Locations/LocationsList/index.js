import InfiniteScroll from "react-infinite-scroller";

import LocationCard from "../../../components/LocationCard";

import { cardTabs } from "./constant";
import { StyledList } from "./styled";

const LocationsList = ({ locations, handleTabs, handleDetailsOpen }) => {
    const tabs = cardTabs.map((tab) => ({ ...tab, onPress: handleTabs }));

    const renderLocation = (location) => {
        return (
            <LocationCard
                className="location-card"
                location={location}
                tabs={tabs}
                onClick={handleDetailsOpen}
            />
        );
    };

    return (
        <>
            {locations
            ?
            <StyledList
                dataSource={locations}
                renderItem={renderLocation}
            />

            : "No locations found."}
        </>
    );
};

export default LocationsList;
