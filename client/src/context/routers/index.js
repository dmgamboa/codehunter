import { Route } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

import SampleFeature from "../../pages/SampleFeature";
import Locations from "../../pages/Locations";
import Scan from "../../pages/Scan";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";

const routes = [
    {
        name: "SAMPLE_FEATURE",
        path: `/sample`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        component: <SampleFeature />
    },
    {
        name: "LOCATIONS",
        path: `/locations`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        component: <Locations />
    },
    {
        name: "SCAN",
        path: `/scan`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        component: <Scan />
    },
    {
        name: "FRIENDS",
        path: `/friends`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        component: <Friends />
    },
    {
        name: "PROFILE",
        path: `/profile`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        component: <Profile />
    },
];

// TODO
// Add Permissions & 404
export const getRoute = () => {
    return routes.map(({ name, path, exact, component }) => {
        return (
            <Route
                key={name}
                exact={exact}
                path={path}
                render={() => component}
            />
        );
    });
};
