import { useHistory } from "react-router-dom";
import AvatarPic from "./AvatarPic"
import EditButton from "./EditButton"
import AvatarContainer from "./AvatarSectionStyled"


// needs onClick and imageAdd
const AvatarSection = () => {

    const history = useHistory();

    const handleEdit = () => {
        history.push("./editprofile");
    };

    return (
        <>
            <AvatarContainer>
                {/* <EditButton onClick={onClick}/> */}
                <EditButton id="editProfileBtn" onClick={handleEdit}/>
                {/* <AvatarPic imageAdd={}/> */}
                <AvatarPic id="avatarPic"/>
            </AvatarContainer>
        </>
    );
};

export default AvatarSection
