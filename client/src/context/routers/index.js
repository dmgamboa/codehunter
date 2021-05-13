import { Route } from "react-router-dom";
import Icon, { 
    CompassOutlined,
    CompassFilled,
//    SmileOutlined,
//    SmileFilled,
    TeamOutlined,
    GiftOutlined,
    GiftFilled,
    UserOutlined
 } from "@ant-design/icons";

import Locations from "../../pages/Locations";
import Scan from "../../pages/Scan";
import Rewards from "../../pages/Rewards";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";
import Walkthrough from "../../pages/Walkthrough";
import Account from "../../pages/Account";
import AboutUs from "../../pages/AboutUs";

import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

const routes = [
    {
        name: "Locations",
        path: "/locations",
        exact: false,
        navTab: true,
        fullscreen: false,
        icon: <CompassOutlined />,
        selectedIcon: <CompassFilled />,
        component: <Locations />
    },
    {
        name: "Scan",
        path: "/scan",
        exact: false,
        navTab: true,
        fullscreen: false,
        icon: <Icon component={Logo} />,
        selectedIcon: <Icon component={Logo} />,
        component: <Scan />
    },
    {
        name: "Friends",
        path: "/friends",
        exact: false,
        navTab: true,
        fullscreen: false,
        icon: <TeamOutlined />,
        selectedIcon: <TeamOutlined />,
        component: <Friends />
    },
    {
        name: "Rewards",
        path: "/rewards",
        exact: false,
        navTab: true,
        fullscreen: false,
        icon: <GiftOutlined />,
        selectedIcon: <GiftFilled />,
        component: <Rewards />
    },
    {
        name: "Profile",
        path: "/profile",
        exact: false,
        navTab: true,
        fullscreen: false,
        icon: <UserOutlined />,
        selectedIcon: <UserOutlined />,
        component: <Profile />
    },
    {
        name: "Walkthrough",
        path: "/walkthrough",
        exact: false,
        navTab: false,
        fullscreen: true,
        component: <Walkthrough />
    },
    {
        name: "Account",
        path: "/account",
        exact: false,
        navTab: false,
        component: <Account />
    },
    {
        name: "AboutUs",
        path: "/aboutus",
        exact: false,
        navTab: false,
        component: <AboutUs />
    }

];

export const navRoutes = routes.filter(route => route.navTab);

export const navlessPaths = routes
    .filter(route => route.fullscreen)
    .map(route => route.path);

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
