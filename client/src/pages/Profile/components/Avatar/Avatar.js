import { useHistory } from "react-router-dom";
import { Button } from "antd";
import AvatarContainer from "./AvatarStyled";
import EditIcon from "../../images/edit.png";
import pic from "../../images/sampleAvatar.png";

const AvatarSection = ({firstName, lastName, avatar}) => {
    const history = useHistory();

    if (!avatar) {
        avatar = pic;
    }

    const handleEdit = () => {
        history.push("./profile/edit");
    };

    return (
        <AvatarContainer>
            <div id="editProfileBtn">
                <img src={EditIcon} id="editIcon" onClick={handleEdit} />
                <Button type="primary" onClick={handleEdit} id="editBtn">
                    Edit
                </Button>
            </div>
            <div id="avatarPic">
                <img src={avatar} id="profilePic" />
                <hr id="picLine" />
            </div>
            <div id="name">
                <p>{firstName} {lastName}</p>
            </div>
        </AvatarContainer>
    );
};

export default AvatarSection;
