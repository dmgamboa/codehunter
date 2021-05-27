import { Card, Modal } from "antd";
import styled from "styled-components";
import theme from "../../../context/themes/main";

const { colors } = theme;

export const StyledCard = styled(Card)`
    .rewardCard {
    }
    display: flex;
    align-items: center;
    height: 90px;
    display: grid;
    grid-template:
        "image content" 100%
        / 30% 70%;
    .ant-card-cover {
        grid-area: image;
        height: 100%;
        max-width: 160px;
        align-self: center;
        img {
            height: 100%;
        }
    }
    .ant-card-body {
        grid-area: content;
        padding: 10px 2%;
        font-size: clamp(0.5rem, 3vw, 0.8rem);
        height: 100%;
        display: grid;
        grid-template:
            "placeName icons" 45%
            "details icons" 50%
            "cost icons" 5%
            / 80% 20%;
        .name {
            margin: 0;
            font-size: clamp(0.5rem, 16px, 1rem);
            grid-area: placeName;
            color: ${colors.primary};
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .details {
            grid-area: details;
            font-size: 16px;
            opacity: 80%;
            /* align-self: flex-end; */
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .cost {
            margin: 0;
            grid-area: cost;
            /* display: "block"; */
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

    .placeholder {
        padding: 0.5rem 0;
    }
`;

export const StyledModal = styled(Modal)`
    text-align: center;
    .ant-modal-title {
        font-size: 25px;
        color: ${colors.primary};
    }
    .ant-modal-body {
        font-size: 20px;
        color: #000;
    }
    .modal-cost {
        color: ${colors.accent};
        font-weight: bold;
    }
    button:hover.ant-btn-primary {
        background-color: ${colors.secondary};
    }
`;
