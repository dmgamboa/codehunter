import styled from "styled-components";
import { Modal } from "antd";

import theme from "../../../context/themes/main";

const { colors } = theme;

export const StyledModal = styled(Modal)`

    .ant-modal-content {
        position: relative;
        margin: 0 auto;
        width: 80%;
    }

    .ant-modal-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin-top: 1rem;
            font-size: clamp(1.5rem, 3vw, 2rem);
        }

        .doge {
            order: -1;
            z-index: 99;
            width: 45%;
        }
    }

    .confetti {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .new-points {
        margin-top: 1rem;
    }

    .points {
        margin-left: 0.25rem;
        font-weight: bold;
        font-size: 1.15rem;
        color: ${colors.primary};
    }
`;