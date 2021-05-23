import Icon, { CloseCircleOutlined } from "@ant-design/icons";

import { ReactComponent as GoogleMapsIcon } from "../../../assets/icons/google-maps.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

export const detailsTabs = [
    {
        key: "directions",
        name: "Get Directions",
        icon: <Icon component={GoogleMapsIcon} />,
    },
    {
        key: "bookmark",
        name: "Add to Bookmarks",
        icon: <Icon component={BookmarkIcon}/>,
    },
    {
        key: "close",
        name: "Close",
        icon: <CloseCircleOutlined />,
    },
];

export const defaultFilters = {
    sort: "az",
};

export const gMapsLink = "https://www.google.com/maps/dir/?api=1&";