import Icon, { EllipsisOutlined } from "@ant-design/icons";

import { ReactComponent as GoogleMapsIcon } from "../../../assets/icons/google-maps.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

export const cardTabs = [
    {
        key: "directions",
        icon: <Icon component={GoogleMapsIcon}/>,
    },
    {
        key: "bookmark",
        icon: <Icon component={BookmarkIcon}/>
    },
    {
        key: "details",
        icon: <EllipsisOutlined />
    },
];