import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Container = styled.div`
    .am-tabs-pane-wrap {
        overflow: hidden;
    }
`;

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        font-size: clamp(2rem, 10vw, 5rem);
        margin: 3rem 0;
    }

    .drawer-item {
        display: block;
        width: 100%;
        margin: 1rem;
        padding: 0.5rem;
        font-size: clamp(1.25rem, 3vw, 2rem);
        border-bottom: 1px solid ${colors.primary};

        .link {
            color: #000;
        }

        .anticon {
            margin-right: 0.5rem;
            color: ${colors.secondary};
        }
    }
`;