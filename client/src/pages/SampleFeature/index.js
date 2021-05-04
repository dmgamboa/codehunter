import { Switch, Route, useRouteMatch } from "react-router-dom";

import SampleScreen from "./SampleScreen";
import SampleForm from "./SampleForm";

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