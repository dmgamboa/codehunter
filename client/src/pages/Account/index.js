import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";

import Login from "./Login/index"
import Register from "./Register/index"
import AuthProvider from "../../context/Auth"

import React from 'react'

const Account = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route  exact
                            path={`${match.path}/register`}
                            render={() => <Register />} />
                    <Route  exact
                            path={`${match.path}/login`}
                            render={() => <Login />} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default Account;

