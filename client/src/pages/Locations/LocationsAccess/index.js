import { message } from "antd";
import Icon from "@ant-design/icons";

import CircleIconBtn from "../../../components/CircleIconBtn";
import { ReactComponent as LocationIconFilled } from "../../../assets/icons/target-location-filled.svg";
import { ReactComponent as LocationIconOutline } from "../../../assets/icons/target-location-outline.svg";

const LocationsAccess = ({ userCoords, handleSuccess }) => {
    const canUseGeolocation = () => {
        if (navigator.geolocation) {
            return true;
        }

        message.error("Sorry, geolocation is not supported by your browser.");
        return false;
    }

    const hasUserPermission = async () => {
        const { state } = await navigator.permissions.query({ name: "geolocation" });

        if (state === "denied") {
            message.error("Please allow geolocation access on your browser to proceed.");
            return false;
        }

        return true;
    }

    const handleError = () => {
        message.error("Something went wrong! Please try again later.");
    }

    const handleClick = async () => {
        if (canUseGeolocation() && await hasUserPermission()) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        }
    }

    return (
        <CircleIconBtn
            icon={userCoords 
                ? <Icon component={LocationIconFilled} /> 
                : <Icon component={LocationIconOutline} />}
            onClick={handleClick}
        />
    );
}

export default LocationsAccess;