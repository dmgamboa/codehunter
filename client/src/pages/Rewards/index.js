import { Switch, Route, useRouteMatch } from "react-router-dom";

import RewardsScreen from "./RewardsScreen";

const Rewards = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <RewardsScreen />}
            />
        </Switch>
    );
};

export default Rewards;