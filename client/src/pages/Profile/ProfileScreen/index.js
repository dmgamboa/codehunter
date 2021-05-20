import { useAuth } from "../../../context/Auth";
import { useHistory } from "react-router-dom";
import AvatarSection from "../components/Avatar/Avatar";
import PointsSection from "../components/Points/PointsSection";
import LocationsList from "../components/History/LocationsList";
import { getProfileData } from "../axios";

const ProfileScreen = () => {
    const { /*logout,*/ userPoints, getUser } = useAuth();
    const history = useHistory();

    const points = (userPoints ? userPoints.data : "N/A");

    function handleLogout() {
        //logout();
        history.push("/login");
    }

    return (
        <div>
            <AvatarSection name={"Hunter Welles"}/>
            {/* <AvatarSection name={getUser}/> */}
            <PointsSection points={points} />
            <LocationsList />
        </div>
    );
};

export default ProfileScreen;
