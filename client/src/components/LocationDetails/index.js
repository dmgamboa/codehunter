import { TabBar } from "antd-mobile";

import { details as detailsToRender } from "./constant";
import StyledDrawer from "./styled";

import LocationPlaceholder from "../../assets/placeholder-location.jpg";

const LocationDetails = ({
    visible,
    onClose,
    location,
    tabs
}) => {

    const renderHours = (hours) => {
        return Object.keys(hours).map(day => {
            
        })
    }

    const renderDetails = (loc) => {
        return Object.keys(detailsToRender).map(detail => {
            return (
                <span
                    key={`${location.name}-${detail}`}
                    className={`detail ${detail}`}
                >
                    {detailsToRender[detail]}
                    {loc[detail]
                        ? detail === "hours"
                            ? loc[detail]["status"]
                        : detail === "website"
                            ? <a href={loc[detail]}>{loc[detail]}</a>
                        : loc[detail]
                        : `No ${detail} listed.`}
                    {detail === "hours" && renderHours(loc[detail]["days"])}
                </span>
            );
        })
    }

    const renderTabs = (tabs) => {
        return tabs.map(({
            key,
            name,
            icon,
            onPress
        }) => {
            return (
                <TabBar.Item
                    key={key}
                    title={name}
                    icon={icon}
                    onPress={() => onPress(key)}
                />
            );
        })
    }

    return (

            <StyledDrawer
                height="auto"
                placement="bottom"
                visible={visible}
                onClose={onClose}
            >
                <img src={location.img ? location.img : LocationPlaceholder} alt={location.name}/>
                
                <span className="top">
                    <h1>{location.name}</h1>
                    <span className="distance">{location.distance && `${location.distance}km away`}</span>
                </span>

                {renderDetails(location.details)}
                
                {tabs && 
                    <TabBar
                        tintColor="#08497E"
                        unselectedTintColor="#08497E"
                    >
                        {renderTabs(tabs)}
                    </TabBar>
                }

            </StyledDrawer>
    );
}

export default LocationDetails;