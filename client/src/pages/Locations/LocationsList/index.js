import Icon, { EllipsisOutlined } from "@ant-design/icons";

import { ReactComponent as GoogleMapsIcon } from "../../../assets/icons/google-maps.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

import LocationCard from "../../../components/LocationCard";


const LocationsList = ({
    locations,
    handleTabs,
    handleDetailsOpen
}) => {    
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
            {testLocations && renderLocations(testLocations)}
        </>
    );
};

export default LocationsList;