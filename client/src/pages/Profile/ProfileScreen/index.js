import { useState, useEffect } from "react";
import { useAuth } from "../../../context/Auth";
import AvatarSection from "../components/Avatar/Avatar";
import PointsSection from "../components/Points/PointsSection";
import LocationsList from "../components/History/LocationsList";
import { readHistory, updateUser } from "../axios";

const ProfileScreen = () => {
    const { getUserData, getUser } = useAuth();

    const [history, setHistory] = useState(null);

    const {name, avatar, points} = getUserData();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        // Fields to update.
        const fields = {
            name: {
                first: "hakuna",
                last: "matata",
            }
            
        };

        data.append("userToken", getUser());
        data.append("fields", JSON.stringify(fields));
        data.append("avatar", e.target[0].files[0]);
        await updateUser(data);
    };

    useEffect(async () => {
        const userHistory = await readHistory(getUser());
        setHistory(userHistory.history);
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="file" />
                <input type="submit" />
            </form>
            <AvatarSection firstName={name.first} lastName={name.last} avatar={avatar} />
            <PointsSection points={points} />
            <LocationsList history={history} />
        </div>
    );
};

export default ProfileScreen;
