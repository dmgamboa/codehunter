import styled from "styled-components";
import theme from "../../../context/themes/main";

const { colors } = theme;

export const Container = styled.div`
    .anticon {
        color: ${colors.secondary};
    }

    .error-message {
        line-height: 1.5;
    }

    button {
        margin-top: 1rem;
    }
`;