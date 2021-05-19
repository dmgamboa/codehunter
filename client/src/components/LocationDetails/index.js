import { Spin } from "antd";
import { TabBar } from "antd-mobile";

import { details as detailsToRender } from "./constant";
import StyledDrawer from "./styled";

import LocationPlaceholder from "../../assets/placeholder-location.jpg";

const LocationDetails = ({ loading, visible, onClose, location, tabs }) => {
    const renderHours = (hours) => {
        return Object.keys(hours).map((day) => {
            return (
                <span key={day} className="hour">
                    <span className="day">{day}</span>
                    <span className="time">
                        {hours[day][0] ? `${hours[day][0]} - ${hours[day][1]}` : "Closed"}
                    </span>
                </span>
            );
        });
    };

    const renderDetails = (loc) => {
        return Object.keys(detailsToRender).map((detail) => {
            return (
                <span key={`${location.name}-${detail}`} className={`detail ${detail}`}>
                    {detailsToRender[detail]}
                    {loc[detail] ? (
                        detail === "hours" ? (
                            loc.hours?.status
                        ) : detail === "website" ? (
                            <a href={loc[detail]} target="_blank" rel="noreferrer">
                                {loc[detail]}
                            </a>
                        ) : detail === "phone" ? (
                            <a href={`tel:+${loc[detail]}`} target="_blank" rel="noreferrer">
                                {loc[detail]}
                            </a>
                        ) : (
                            loc[detail]
                        )
                    ) : (
                        `No ${detail} listed.`
                    )}
                    {detail === "hours" && loc.hours && (
                        <div className="hours-list">{renderHours(loc[detail]["days"])}</div>
                    )}
                </span>
            );
        });
    };

    const renderTabs = (tabs) => {
        return tabs.map(({ key, name, icon, onPress }) => {
            return (
                <TabBar.Item
                    key={key}
                    title={name}
                    icon={icon}
                    onPress={() => onPress({ tabs: key })}
                />
            );
        });
    };

    return (
        <StyledDrawer height="auto" placement="bottom" visible={visible} onClose={onClose}>
            <Spin spinning={loading}/>
            {location && (
                <>
                    <img
                        src={location.image ? location.image : LocationPlaceholder}
                        alt={location.name}
                    />

                    <span className="top">
                        <h1>{location.name}</h1>
                        <span className="distance">
                            {location.distance && `${location.distance}km away`}
                        </span>
                    </span>

                    {renderDetails(location.details)}

                    {tabs && (
                        <TabBar tintColor="#08497E" unselectedTintColor="#08497E">
                            {renderTabs(tabs)}
                        </TabBar>
                    )}
                </>
            )}
        </StyledDrawer>
    );
};

export default LocationDetails;
