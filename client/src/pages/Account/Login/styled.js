import styled from "styled-components"

const StyledLogin = styled.div`
    margin: 150px 10% 0 10%;
    .welcome {
        color: steelblue;
        text-align: left;
        width: 150px;
    }
    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }
    .login-btn {
        display: flex;
        flex-direction: row;
        .login-form-button {
            width: 100%;
        }
    }
    .alternative {
        margin-top: 60px;
        clear: left;
        font-size: 24pt;
        display: flex;
        justify-content: space-around;
    }
`

export default StyledLogin