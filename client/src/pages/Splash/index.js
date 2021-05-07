import { Switch, Route, useRouteMatch } from "react-router-dom";

import SplashScreen from "./SplashScreen";

const Splash = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <SplashScreen />}
            />
        </Switch>
    );
}

export default Splash;