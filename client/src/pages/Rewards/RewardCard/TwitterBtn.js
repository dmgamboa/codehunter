import {TwitterOutlined} from "@ant-design/icons";
import { Button } from "antd";
const TwitterBtn = () => {
    return (
        <div>
            <Button size="large" style={{background: "#E8F5FD", color: "#08a0e9", width: "100%"}}>
                <a href="https://ctt.ac/hWlvU"><TwitterOutlined /> Share</a>
            </Button>
        </div>
    );
};

export default TwitterBtn;
