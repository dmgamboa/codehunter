import { Button } from "antd";
import BtnContainer from "./StyledBtn"
import EditIcon from "../../images/edit.png"

function EditButton({onClick}) {
    return (
        <>
        <BtnContainer>
            <img src={EditIcon} id="editIcon" onClick={onClick}/>
            <Button type="primary" onClick={onClick} id="editBtn">Edit</Button>
        </BtnContainer>
        </>
    )
}

export default EditButton

