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
<<<<<<< HEAD
        icon: <Icon component={BookmarkIcon} />,
=======
        icon: <Icon component={BookmarkIcon}/>,
>>>>>>> 7e1a799777a000391bfdf49ff9437e471ca0f61c
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

export const testLocations = [
    {
        name: "Telus World of Science",
        distance: 5,
        neighborhood: "Downtown",
        bookmarked: false,
        visited: true,
        type: "Museum / Gallery",
    },
];

export const testData = {
    name: "Telus World of Science",
    distance: 5,
    bookmarked: true,
    visited: false,
    details: {
        type: "Museum / Gallery",
        address: "1455 Quebec St, Vancouver, BC V6A 3Z7",
        hours: {
            status: "Open now",
            days: {
                mon: ["08:00 AM", "10:00 PM"],
                tue: ["08:00 AM", "10:00 PM"],
                wed: ["08:00 AM", "10:00 PM"],
                thu: ["08:00 AM", "10:00 PM"],
                fri: ["08:00 AM", "10:00 PM"],
                sat: [],
                sun: [],
            },
        },
        phone: "6041234567",
<<<<<<< HEAD
        website: "https://www.scienceworld.ca",
    },
};
=======
        website: "https://www.scienceworld.ca"
    }
};
>>>>>>> 7e1a799777a000391bfdf49ff9437e471ca0f61c
