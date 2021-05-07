import { Switch, Route, useRouteMatch } from "react-router-dom";

import LocationsScreen from "./LocationsScreen";

const Locations = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <LocationsScreen />}
            />
        </Switch>
    );
};

export default Locations;