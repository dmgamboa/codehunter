import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../../context/themes/main";

const { colors } = theme;

const StyledDrawer = styled(Drawer)`
    .ant-drawer-header {
        .ant-drawer-title {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.primary};

            h1 {
                margin: 0;
                line-height: 1;
                color: ${colors.primary};
            }

            .anticon {
                margin-right: 0.5rem;
                font-size: 1.25rem;
            }
        }
    }
`;

export default StyledDrawer;
