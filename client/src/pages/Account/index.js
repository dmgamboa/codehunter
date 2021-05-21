import { Route, Switch, useRouteMatch } from "react-router-dom";

import Login from "./Login/index";
import Register from "./Register/index";
import PageNotFound from "../../components/PageNotFound";

const Account = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/login`, `${match.path}/`} render={() => <Login />} />
            <Route path={`${match.path}/register`} render={() => <Register />} />
            <Route path={`${match.path}/`} render={()=> <PageNotFound />} />
        </Switch>
    );
};

export default Account;
