import { Switch, useLocation } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";

const App = () => {
  return (
      <MainLayout>
        <Switch>{getRoute()}</Switch>
      </MainLayout>      
  );
};

export default App;