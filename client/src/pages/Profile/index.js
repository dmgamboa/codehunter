import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProfileScreen from "./ProfileScreen";

import "./ProfileScreen";

const Profile = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <ProfileScreen />}
            />
        </Switch>
    );
}

export default Profile;