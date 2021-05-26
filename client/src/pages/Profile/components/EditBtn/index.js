import { Button } from "antd";
import {EditOutlined} from "@ant-design/icons";

import Container from "./styled";

const EditButton = ({ onClick }) => {
    return (
        <Container className="button">
            <Button type="primary" onClick={onClick}><EditOutlined style={{color:"white"}}/>Edit</Button>
        </Container>
    );
};

export default EditButton;