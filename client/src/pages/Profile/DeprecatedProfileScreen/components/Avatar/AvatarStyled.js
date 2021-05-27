import styled from "styled-components";
import theme from "../../../../context/themes/main";

const { colors } = theme;

const AvatarContainer = styled.div`
    position: relative;

    #avatarPic {
        top: 10px;
        margin: 20px;
        justify-content: center;
        align-content: center;
    }

    #profilePic {
        left: 50%;
        right: 50%;
        width: 100%;
        border-style: solid solid none solid;
        border-width: 0.7px;
        z-index: 0;
    }
    #picLine {
        width: 100%;
        height: 10%;
        border: 0.5px solid #bfbfbf;
    }

    #name {
        font-size: 200%;
        font-weight: 650;
        color: ${colors.primary};
        text-align: center;
    }

`;

export default AvatarContainer;
