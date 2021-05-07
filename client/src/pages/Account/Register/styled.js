import styled from "styled-components";

const StyledRegistration = styled.div`
    margin: 100px 10% 0 10%;
    .signup {
        margin-bottom: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            color: steelblue;
        }
    }
    .registration {
        color: steelblue;
        text-align: left;
        width: 150px;
        max-width: 500px;
    }
    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }
    .ant-form-item {
        margin-bottom: 10px;
        /* width: 100%; */
    }
    .login-btn {
        display: flex;
        flex-direction: row;
        .login-form-button {
            width: 100%;
        }
    }
    a {
        span {
            color: #000;
        }
    }
    p {
        margin-top: 40px;
        text-align: center;
    }
    .alternative {
        margin-top: 10px;
        clear: left;
        font-size: 24pt;
        display: flex;
        justify-content: space-around;
    }
    .full-length {
        width: 100%;
    }
`;

export default StyledRegistration;