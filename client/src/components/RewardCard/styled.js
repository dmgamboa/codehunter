import { Card, Modal } from "antd";
// import Modal from "styled-react-modal";
import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

export const StyledCard = styled(Card)`
    .rewardCard {
        
    }
    display: flex;
    align-items: center;

    height: 100px;
    .ant-card-cover {
        height: 100%;
        width: 160px;
        align-self: center;
        img {
            height: 100%;
        }
    }

    .ant-card-body {
        padding: 10px 2%;
        font-size: clamp(0.5rem, 3vw, 0.8rem);
        height: 100%;
        display: grid;
        grid-template:
            "placeName icons" 50%
            "details icons" 50%
            / 80% 20%;
        
        .place {
            grid-area: placeName;
            color: ${colors.primary};
        }
        .details {
            grid-area: details;
            font-size: 11pt;
            opacity: 80%;
        }
        .icons {
            grid-area: icons;
            justify-self: flex-end;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 18pt;
        }
    }  
`;

export const StyledModal = styled(Modal)`
        text-align: center;
    .ant-modal-title {
        color: ${colors.primary};
    }
    button:hover.ant-btn-primary {
        background-color: ${colors.secondary};
        /* color: #FFF; */
    }
`;

// export default StyledCard;