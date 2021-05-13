import Icon from "@ant-design/icons";

import CircleIconBtn from "../../../components/CircleIconBtn";
import { ReactComponent as LocationIconFilled } from "../../../assets/icons/target-location-filled.svg";
import { ReactComponent as LocationIconOutline } from "../../../assets/icons/target-location-outline.svg";

const LocationsAccess = ({ userCoords }) => {
    const handleClick = () => {

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