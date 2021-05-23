import { useHistory } from "react-router-dom";
import { Button } from "antd";
import AvatarContainer from "./AvatarStyled";
import EditIcon from "../../images/edit.png";
import pic from "../../images/sampleAvatar.png";

const AvatarSection = ({name}) => {
    const history = useHistory();

    const handleEdit = () => {
        history.push("./profile/edit");
    };

    return (
        <>
            <AvatarContainer>
                <div id="editProfileBtn">
                    <img src={EditIcon} id="editIcon" onClick={handleEdit} />
                    <Button type="primary" onClick={handleEdit} id="editBtn">
                        Edit
                    </Button>
                </div>
                <div id="avatarPic">
                    {/* <Avatar size={300} icon={<UserOutlined />} shape="square" id="profilePic"/> */}
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
