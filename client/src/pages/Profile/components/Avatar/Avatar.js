import { useHistory } from "react-router-dom";
import AvatarContainer from "./AvatarStyled";
import pic from "../../images/sampleAvatar.png";
import EditButton from "../EditBtn"

const AvatarSection = ({firstName, lastName, avatar}) => {
    const history = useHistory();

    if (!avatar) {
        avatar = pic;
    }

    const handleEdit = () => {
        history.push("./profile/edit");
    };

    return (
        <>
            <AvatarContainer>
                <EditButton onClick={handleEdit} className="editBtn"/>
                <div id="avatarPic">
                    <img src={avatar} id="profilePic" />
                    <hr id="picLine" />
                </div>
                <div id="name">
                    <p>{firstName} {lastName}</p>
                </div>
            </AvatarContainer>
        </>
    );
};

export default AvatarSection;
