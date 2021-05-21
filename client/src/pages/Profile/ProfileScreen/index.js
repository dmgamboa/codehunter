import { useAuth } from "../../../context/Auth";
import { useHistory } from "react-router-dom";
import AvatarSection from "../components/Avatar/Avatar";
import PointsSection from "../components/Points/PointsSection";
import LocationsList from "../components/History/LocationsList";
import { getProfileData, updateUser } from "../axios";

const ProfileScreen = () => {
    const { /*logout,*/ userPoints, getUser } = useAuth();
    const history = useHistory();

    const points = (userPoints ? userPoints.data : "N/A");

    function handleLogout() {
        //logout();
        history.push("/login");
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        // Fields to update.
        const fields = {
            username: "garfield",
        };

        data.append("user", JSON.stringify(getUser()));
        data.append("fields", JSON.stringify(fields));
        data.append("avatar", e.target[0].files[0]);
        const response = await updateUser(data);

        // Returns the user.
        console.log(response);
    };

    return (
        <div>
            <AvatarSection name={"Hunter Welles"}/>
            {/* <AvatarSection name={getUser}/> */}
            <form onSubmit={onSubmit}>
                <input type="file" />
                <input type="submit" />
            </form>
            <AvatarSection />
            <PointsSection points={points} />
            <LocationsList />
        </div>
    );
};

export default ProfileScreen;
