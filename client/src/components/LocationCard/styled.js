import { Card } from "antd";
import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

const StyledCard = styled(Card)`
    border-radius: 1.5rem;

    .ant-card-head {
        font-size: clamp(0.6rem, 3vw, 1.2rem);

        .ant-card-head-title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                margin: 0;
            }

            .anticon {
                color: ${colors.secondary};
            }
        }
    }

    img {
        height: 150px;
        object-fit: cover;
    }

    h1 {
        font-size: clamp(1rem, 6vw, 3rem);
        color: ${colors.primary};
    }

    .am-tab-bar {
        margin-top: 1rem;
        padding: 0;
        height: 2rem;
    }
`;

export default StyledCard;