import { Route } from "react-router-dom";
import Icon, {
    CompassOutlined,
    CompassFilled,
    TeamOutlined,
    GiftOutlined,
    GiftFilled,
    UserOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons";

import Locations from "../../pages/Locations";
import Scan from "../../pages/Scan";
import Rewards from "../../pages/Rewards";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";
import Walkthrough from "../../pages/Walkthrough";
import Account from "../../pages/Account";
import AboutUs from "../../pages/AboutUs";
import Credits from "../../pages/Credits";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import PageNotFound from "../../components/PageNotFound";
import { useAuth } from "../Auth";

const routes = [
    {
        name: "Locations",
        path: "/locations",
        exact: false,
        navTab: true,
        fullscreen: false,
        restricted: true,
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
        restricted: true,
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
        restricted: true,
        icon: <TeamOutlined />,
        selectedIcon: <TeamOutlined />,
        component: <Friends />
    },
    {
        name: "Profile",
        path: "/profile",
        exact: false,
        navTab: true,
        fullscreen: false,
        restricted: true,
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
        fullscreen: true,
        component: <Account />
    },
    {
        name: "Rewards",
        path: "/rewards",
        exact: false,
        navTab: false,
        navDrawer: true,
        fullscreen: false,
        restricted: true,
        icon: <GiftOutlined />,
        selectedIcon: <GiftFilled />,
        component: <Rewards />
    },
    {
        name: "About Us",
        path: "/aboutus",
        exact: false,
        navTab: false,
        navDrawer: true,
        fullScreen: false,
        restricted: true,
        icon: <QuestionCircleOutlined />,
        component: <AboutUs />
    },
    {
        name: "Credits",
        path: "/credits",
        exact: false,
        navTab: false,
        navDrawer: true,
        fullScreen: false,
        restricted: true,
        icon: <QuestionCircleOutlined />,
        component: <Credits />
    },
    {
        name: "404",
        path: "*",
        exact: false,
        navTab: false,
        navDrawer: false,
        fullscreen: true,
        restricted: true,
        component: <PageNotFound />
    }
];

export const navTabRoutes = routes.filter((route) => route.navTab);

export const navDrawerRoutes = routes.filter((route) => route.navDrawer);

export const navlessPaths = routes.filter((route) => route.fullscreen).map((route) => route.path);

export const getRoute = () => {
    const { getUser } = useAuth();
    const loggedIn = getUser();

    return routes.map(({ name, path, exact, component, restricted }) => {
        return (
            <Route
                key={name}
                exact={exact}
                path={path}
                render={() => (restricted && !loggedIn ? <PageNotFound /> : component)}
            />
        );
    });
};
