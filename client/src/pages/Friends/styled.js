import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Layout = styled.div`
    flex: 1;
    width: 100%;
    .top {
        text-align: center;

        .anticon {
            color: ${colors.primary};
            margin-right: 0.5rem;
        }
    }

    .anticon-trophy {
        color: ${colors.secondary};
    }


    .friends-card {
        margin-bottom: 0.5rem;
    }
`;