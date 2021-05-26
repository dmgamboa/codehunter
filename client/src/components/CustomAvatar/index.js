import Icon from "@ant-design/icons";

import { placeholders } from "./constant";
import { StyledAvatar } from "./styled";

const CustomAvatar = ({ photo, background = "white", size = "55px" }) => {
    const getRandomAvatar = (placeholders) => {
        const index = Math.floor(Math.random() * placeholders.length);
        return placeholders[index];
    };

    return (
        <StyledAvatar
            className="custom-avatar"
            style={{ background, height: size, width: size }}
            src={photo && photo}
            icon={!photo && <Icon component={getRandomAvatar(placeholders)} />}
        />
    );
};

export default CustomAvatar;
