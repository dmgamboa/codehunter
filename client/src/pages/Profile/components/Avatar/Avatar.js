import { useHistory } from "react-router-dom";
import AvatarContainer from "./AvatarStyled";
import pic from "../../images/sampleAvatar.png";
import EditButton from "../EditBtn/index";
const AvatarSection = ({name}) => {
    const history = useHistory();

    const handleEdit = () => {
        history.push("./profile/edit");
    };

    return (
        <>
            <AvatarContainer>
                <EditButton onClick={handleEdit} className="editBtn"/>
                <div id="avatarPic">
                    <img src={pic} id="profilePic" />
                    <hr id="picLine" />
                </div>
                <div id="name">
                    <p>{name}</p>
                </div>
            </AvatarContainer>
        </>
    );
};

export default AvatarSection;
