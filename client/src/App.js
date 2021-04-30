import { Switch } from "react-router-dom";

import "./App.less";
import { getRoute } from "./context/routers";
import MainLayout from "./components/Layout";
import SampleFeature from "./feature/sample-feature";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./context/Auth"

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;
