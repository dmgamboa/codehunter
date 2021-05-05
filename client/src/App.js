import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";

function App() {
  return (
    <MainLayout>
      <Switch>{getRoute()}</Switch>
    </MainLayout>
  );
}

export default App;