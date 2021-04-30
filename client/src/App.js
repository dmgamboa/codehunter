import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";
import SampleFeature from "./feature/sample-feature";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Login from "./components/Login";
import AuthProvider from "./context/Auth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <MainLayout>
      <Switch>{getRoute()}</Switch>
    </MainLayout>
  );
}

export default App;
