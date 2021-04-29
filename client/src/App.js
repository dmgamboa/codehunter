import { Switch } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";
import SampleFeature from "./feature/sample-feature";

// TODO:
// Handle user authentication redirect
function App() {
  return (
    <SampleFeature />
  );
}

export default App;
