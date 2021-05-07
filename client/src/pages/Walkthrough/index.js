import { Switch, Route, useRouteMatch } from "react-router-dom";

import WalkthroughScreen from "./WalkthroughScreen";

const Walkthrough = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <WalkthroughScreen />}
            />
        </Switch>
    );
};

export default Walkthrough;