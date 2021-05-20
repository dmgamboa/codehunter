import { Route, Switch, useRouteMatch } from "react-router-dom";

import Login from "./Login/index";
import Register from "./Register/index";

const Account = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} render={() => <Login />} />
            <Route path={`${match.path}/register`} render={() => <Register />} />
        </Switch>
    );
};

export default Account;
