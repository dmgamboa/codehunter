import { Switch, Route, useRouteMatch } from "react-router-dom";

import FriendsScreen from "./FriendsScreen";

const Friends = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <FriendsScreen />}
            />
        </Switch>
    );
}

export default Friends;