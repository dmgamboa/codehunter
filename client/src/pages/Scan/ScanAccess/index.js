import { Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { Container } from "./styled";

const ScanAccess = ({ error }) => {
    const handleReload = () => {
        location.reload();
    };

    const renderErrorMessage = (error) => {
        switch (error) {
        case "NotReadableError":
            return "It looks like your camera is being used in another application. Please close that application and try again.";
        case "NotAllowedError":
            return "It looks like your browser has blocked camera permissions. Please allow camera access to use this feature.";
        default:
            return "Something went wrong with trying to access your camera. Please try again later.";
        }
    };

    return (
        <Container>
            <h1><ExclamationCircleOutlined /> Uh oh...</h1>
            <span className="error-message">{renderErrorMessage(error)}</span>
            <Button type="primary" block onClick={handleReload}>Try Again</Button>
        </Container>
    );
};

export default ScanAccess;