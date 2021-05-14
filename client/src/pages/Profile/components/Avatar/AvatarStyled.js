import styled from "styled-components";

const AvatarContainer = styled.div`
    #editBtn {
        color: black;
        background-color: #adc9df;
        width: 17%;
        height: 3.5%;
        position: absolute;
        z-index: 1;
        text-align: right;
        padding-bottom: 22px;
        font-weight: 500;
        right: 35px;
    }
    #editIcon {
        margin-top: 6px;
        margin-left: 4.5px;
        right: 75px;
        width: 5%;
        position: absolute;
        z-index: 2;
    }

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
        z-index: 0;
    }
`;

export default AvatarContainer;
