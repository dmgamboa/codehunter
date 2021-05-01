import { Switch, Route, useRouteMatch } from "react-router-dom";

import SampleScreen from "./sample-screen";
import SampleForm from "./sample-form";

const SampleFeature = () => {
    const match = useRouteMatch();


    return (
        <Switch>
            <Route 
                exact
                path={`${match.path}`}
                render={() => <SampleScreen />}
            />
            <Route
                exact
                path={`${match.path}/form`}
                render={() => <SampleForm />}
            />
        </Switch>
    );
}

export default SampleFeature;