import { Switch, Route, useRouteMatch } from "react-router-dom";

import SampleScreen from "./components/sample-screen";

const SampleFeature = () => {
    return (
        <SampleScreen />
        // <Switch>
        //     <Route 
        //         exact
        //         path={`${match.path}`}
        //         render={(props) => <SampleScreen />}
        //     />
        // </Switch>
    );
}

export default SampleFeature;