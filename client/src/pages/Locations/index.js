import { Switch, Route, useRouteMatch } from "react-router-dom";

import LocationsMap from "./LocationsMap";

const Locations = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <LocationsMap />}
            />
        </Switch>
    );
};

export default Locations;