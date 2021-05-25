import Icon from "@ant-design/icons";

import { placeholders } from "./constant";
import { StyledAvatar } from "./styled";

const CustomAvatar = ({ photo, background = "white" }) => {
    const getRandomAvatar = (placeholders) => {
        const index = Math.floor(Math.random() * placeholders.length);
        return placeholders[index];
    };

    return (
        <StyledAvatar
            className="custom-avatar"
            style={{ background }}
            src={photo && photo}
            icon={!photo && <Icon component={getRandomAvatar(placeholders)} />}
        />
    );
};

export default CustomAvatar;
