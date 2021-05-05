import { Switch, Route, useRouteMatch } from "react-router-dom";

import ScanScreen from "./ScanScreen";

const Scan = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <ScanScreen />}
            />
        </Switch>
    );
}

export default Scan;