import {StyledAvatar, Image} from "./AvatarStyle.js"
import SampleAvatar from "../../images/sampleAvatar.png";
import Liner from "../../images/blackDivider.png"

function AvatarPic({imageAdd}) {
    return (
        <>
        <StyledAvatar>
            <img src={SampleAvatar} id="profilePic"/>
            <img src={Liner} id="picLine"/>
        </StyledAvatar>
        </>
    )
}

// DON'T FORGET TO CALL THIS IN THE MAIN FILE

// const getImageBlob = ({imageAdd}) => {
//     const response = await fetch(imageAdd)
//     const blob = await response.blob()
//     document.getElementById("profilePic").src = URL.createObjectURL(blob)
// }

export default AvatarPic
