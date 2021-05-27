import { Input } from "antd";
import styled from "styled-components";

import theme from "../../../../context/themes/main";

const { Search } = Input;
const { colors } = theme;

const StyledSearch = styled(Search)`
    input {
        &:active, &:focus {
            border-radius: 2rem;
        }
    }
    
    .ant-input-affix-wrapper {
        border: none;
        background: none;
    }

    .ant-input-wrapper {
        border-radius: 2rem;
        border: 1px solid ${colors.primary};
    }

    .ant-input-group-addon {
        background: none;
        
        .anticon {
            color: ${colors.primary};
        }
    }

    .ant-input-clear-icon {
        color: ${colors.secondary};
    }

    button.ant-btn.ant-btn-icon-only {
        border: none;
        background: none;
    }
`;

export default StyledSearch;