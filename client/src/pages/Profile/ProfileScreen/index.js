import { useAuth } from "../../../context/Auth";
import { useHistory } from "react-router-dom";
import AvatarSection from "../components/Avatar/Avatar";
import PointsSection from "../components/Points/PointsSection";
import LocationsList from "../components/History/LocationsList";

const ProfileScreen = () => {
<<<<<<< HEAD
    const { logout } = useAuth();
    const history = useHistory();

    function handleLogout() {
        logout();
        history.push("/login");
    }

    return (
        <div>
            <h1>Profile page</h1>
            Email: Some email
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
=======
  //const { logout } = useAuth();
  const history = useHistory();

  function handleLogout() {
    //logout();
    history.push("/login");
  }

  return (
    <div>
      <AvatarSection/>
      <PointsSection points={12}/>
      <LocationsList/>
    </div>
  );
>>>>>>> 07e7eb60c287a6dae2656b1b15c874ad1b778f55
};

export default ProfileScreen;