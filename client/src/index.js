import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Splash from "./pages/Splash";
import App from "./App";
import AuthProvider from "./context/Auth";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path={["/"]} render={() => <Splash />} />
                    <Route path={["/:page", "/:page/:subPage"]} render={() => <App />} />
                </Switch>
            </AnimatePresence>
        </Router>
    </AuthProvider>,
    document.getElementById("root")
);

reportWebVitals();
