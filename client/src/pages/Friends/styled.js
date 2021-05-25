import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Layout = styled.div`
    flex: 1;
    width: 100%;
    .top {
        .anticon {
            color: ${colors.primary};
        }
    }

    .anticon {
        color: ${colors.secondary};
    }


    .friends-card {
        margin-bottom: 0.5rem;
    }
`;