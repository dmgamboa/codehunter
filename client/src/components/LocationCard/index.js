import { Tooltip } from "antd";
import { TabBar } from "antd-mobile";
import Icon, { CheckCircleOutlined } from "@ant-design/icons";

import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import LocationPlaceholder from "../../assets/placeholder-location.jpg";

import StyledCard from "./styled";

const LocationCard = ({
    location,
    tabs,
    onClick
}) => {
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
        });
    };

    return (
        <StyledCard
            hoverable
            onClick={onClick}
            title={(
                <>
                    <h2>{location.type}</h2>
                    {location.visited ?
                        <Tooltip
                            placement="left"
                            trigger={["hover", "focus"]}
                            title="You have visited this location before."
                            color="#005526"
                        >
                            <CheckCircleOutlined />
                        </Tooltip>
                    : location.bookmarked &&
                            <Tooltip
                                placement="left"
                                trigger={["hover", "focus"]}
                                title="This location is in your bookmarks."
                                color="#005526"
                            >
                                <Icon component={BookmarkIcon} />
                            </Tooltip>
                    }
                </>
            )}
            cover={<img src={LocationPlaceholder} alt={location.name}/>}
        >

            <h1>{location.name}</h1>
            <span className="subtitle">
                {location.neighborhood}
                {location.distance && ` (${location.distance}km away)`}
            </span>

            {tabs &&
                <TabBar
                    tintColor="#08497E"
                    unselectedTintColor="#08497E"
                >
                    {renderTabs(tabs)}
                </TabBar>
            }
        </StyledCard>
    );
};

export default LocationCard;