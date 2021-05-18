import { Tooltip } from "antd";
import { TabBar } from "antd-mobile";
import Icon, { CheckCircleOutlined } from "@ant-design/icons";

import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import LocationPlaceholder from "../../assets/placeholder-location.jpg";

import StyledCard from "./styled";

const RewardCard = ({ location, tabs, onClick }) => {
    const renderTabs = (tabs) => {
        return tabs.map(({ key, name, icon, onPress }) => {
            return <TabBar.Item key={key} title={name} icon={icon} onPress={() => onPress(key)} />;
        });
    };

    return (
        // This becomes a antd card using styled component (see styled.js)
        <StyledCard
            hoverable
            onClick={onClick}
            // title={
                // <>
                //     <h2>{location.type}</h2>
                //     {location.visited ? (
                //         <Tooltip
                //             placement="left"
                //             trigger={["hover", "focus"]}
                //             title="You have visited this location before."
                //             color="#005526"
                //         >
                //             <CheckCircleOutlined />
                //         </Tooltip>
                //     ) : (
                //         location.bookmarked && (
                //             <Tooltip
                //                 placement="left"
                //                 trigger={["hover", "focus"]}
                //                 title="This location is in your bookmarks."
                //                 color="#005526"
                //             >
                //                 <Icon component={BookmarkIcon} />
                //             </Tooltip>
                //         )
                //     )}
                // </>
            // }
            cover={<img src={LocationPlaceholder} alt="placeholder name" />}
        >
            <h1 className="place">Some place</h1>
            <span className="details">
                Some field in db indicating specific reward
            </span>

            <div className="icons">icon here</div>
            {/* {tabs && (
                <TabBar tintColor="#08497E" unselectedTintColor="#08497E">
                    {renderTabs(tabs)}
                </TabBar>
            )} */}

        </StyledCard>
    );
};

export default RewardCard;
