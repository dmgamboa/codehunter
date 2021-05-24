import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLogin = styled(motion.div)`
    /* margin: 150px 10% 0 10%; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;


    .login {
        width: 100%;
    }

    .welcome {
        color: steelblue;
        text-align: center;
        /* text-align: left;
        width: 150px; */
    }
    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }
    .login-btn {
        display: flex;
        flex-direction: row;
    }
    .alternative {
        margin-top: 60px;
        clear: left;
        font-size: 24pt;
        display: flex;
        justify-content: space-around;
    }
`;

export default StyledLogin;