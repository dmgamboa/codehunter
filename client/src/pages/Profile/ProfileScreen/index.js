import React, { useReducer } from "react";
// import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";
import AvatarSection from "../components/Avatar/AvatarSection"
import PointsSection from "../components/Points/PointsSection"

const ProfileScreen = () => {
//   const { user, logout } = useAuth();
  const history = useHistory();

  function handleLogout() {
    logout();
    history.push("/login");
  }

  return (
    <div>
      <AvatarSection/>
      <PointsSection points={12}/>
      <h1>Profile page</h1>
      Email: Some email
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default ProfileScreen;