import { Route, Switch, useRouteMatch } from "react-router-dom";

import Login from "./Login/index";
import Register from "./Register/index";
import AuthProvider from "../../context/Auth";

const Account = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.path}/register`} render={() => <Register />} />
            <Route exact path={`${match.path}/login`} render={() => <Login />} />
        </Switch>
    );
};

export default Account;
