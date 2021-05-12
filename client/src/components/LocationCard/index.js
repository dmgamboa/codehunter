import { TabBar } from "antd-mobile";
import Icon, { CheckCircleOutlined } from "@ant-design/icons";

import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import LocationPlaceholder from "../../assets/placeholder-location.jpg";

import StyledCard from "./styled";

const LocationCard = ({location, tabs}) => {
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
        <StyledCard
            title={(
                <span>
                    <h2>{location.type}</h2>
                    {location.visited ? <CheckCircleOutlined />
                        : location.bookmarked && <Icon component={BookmarkIcon} />}
                </span>
            )}
            cover={<img src={LocationPlaceholder} alt={location.name}/>}
        >

            <h1>{location.name}</h1>
            <span className="subtitle">
                {location.neighborhood}
                {location.distance && ` (${location.distance}km away)`}
            </span>

            {tabs &&
                <TabBar>
                    {renderTabs(tabs)}
                </TabBar>
            }
        </StyledCard>
    );
}

export default LocationCard;