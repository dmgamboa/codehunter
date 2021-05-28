import styled from "styled-components";
import { rgba } from "polished";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Container = styled.div`
    cursor: pointer;

    .am-tabs-pane-wrap {
        overflow: hidden;
    }

    .am-tab-bar-tab {
        &:hover {
            .anticon {
                color: ${rgba(colors.primary, 0.7)};
            }
        }
    }
`;