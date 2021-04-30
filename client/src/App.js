import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";
import SampleFeature from "./feature/sample-feature";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import AuthProvider from "./context/Auth"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
