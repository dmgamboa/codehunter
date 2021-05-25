import styled from "styled-components";
import { Avatar } from "antd";

export const StyledAvatar = styled(Avatar)`
    position: relative;
    margin-right: 0.5rem;

    .anticon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 175%;
        color: black;
    }
`;