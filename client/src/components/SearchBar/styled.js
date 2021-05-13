import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const StyledSearch = styled(Search)`
    margin-bottom: 1rem;
    
    .ant-input-affix-wrapper {
        border: none;
        background: none;
    }


    .ant-input-wrapper {
        border-radius: 2rem;
        border: 1px solid #08497E;
    }

    .ant-input-group-addon {
        background: none;
        
        .anticon {
            color: #08497E;
        }
    }

    button.ant-btn.ant-btn-icon-only {
        border: none;
        background: none;
    }
`;

export default StyledSearch;