import { useAuth } from "../../../context/Auth";
import { useHistory } from "react-router-dom";
import AvatarSection from "../components/Avatar/Avatar";
import PointsSection from "../components/Points/PointsSection";
import LocationsList from "../components/History/LocationsList";

const ProfileScreen = () => {
    //const { logout } = useAuth();
    const history = useHistory();

    function handleLogout() {
        //logout();
        history.push("/login");
    }

    return (
        <div>
            <AvatarSection />
            <PointsSection points={12} />
            <LocationsList />
        </div>
    );
};

export default ProfileScreen;
