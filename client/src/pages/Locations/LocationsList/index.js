import LocationCard from "../../../components/LocationCard";

import { cardTabs } from "./constant";
import { StyledInfiniteScroll } from "./styled";

const LocationsList = ({
    loading,
    locations,
    handleTabs,
    handleDetailsOpen,
    hasMore,
    handleScroll
}) => {
    const tabs = cardTabs.map((tab) => ({ ...tab, onPress: handleTabs }));

    const renderLocations = (locations) => {
        let i = 0;
        return locations.map(location => {
            i++;    
            return (
                <LocationCard
                    key={`${location.name}-0${i}`}
                    loading={loading}
                    className="location-card"
                    location={location}
                    tabs={tabs}
                    onClick={handleDetailsOpen}
                />
            );
        });

    };

    return (
        <>
            {locations ? (
                <StyledInfiniteScroll
                    next={handleScroll}
                    dataLength={locations.length}
                    hasMore={hasMore}
                    scrollableTarget="mainContent"
                    scrollThreshold={0.95}
                >
                    {renderLocations(locations)}
                </StyledInfiniteScroll>
            ) : (
                "No locations found."
            )}
        </>
    );
};

export default LocationsList;
