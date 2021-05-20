import { useAuth } from "../../../context/Auth";
import { Link, useHistory } from "react-router-dom";
import {
    MailOutlined,
    LockOutlined,
    AppleOutlined,
    FacebookOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";

import StyledLogin from "./styled.js";

import { useRef } from "react";
import { motion } from "framer-motion";
import { getUserPoints } from "../axios";

const Login = () => {
    const valuesRef = useRef();
    const history = useHistory();
    const { login, setUserPoints } = useAuth();

    const onFinish = async () => {
        const email = valuesRef.current.getFieldValue().email;
        const password = valuesRef.current.getFieldValue().password;

        try {
            const userData = await login(email, password);
            const userPoints = await getUserPoints(userData);
            setUserPoints(userPoints);
            message.loading({ content: "Glad to have you back!", duration: 1 });
            history.push("/locations");
        } catch (e) {
            // Displays loading message
            message.error("Failed to login, please check your password and email.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <StyledLogin className="login">
                <h1 className="welcome"> Welcome Back to CodeHunter.</h1>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    ref={valuesRef}
                    onFinish={onFinish}
                >
                    {/* email field */}
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="Email"
                        />
                    </Form.Item>

                    {/* Password field */}
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    {/* Remember me check box */}
                    <Form.Item>
                        {/* Button previously an a tag */}
                        <a className="login-form-forgot" href="#">
                            Forgot password
                        </a>
                    </Form.Item>

                    {/* login button */}
                    <Form.Item className="login-btn">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>

                    <p>
                        Or <Link to="/account/register">register now</Link>
                    </p>

                    <div className="alternative">
                        <AppleOutlined />
                        <FacebookOutlined />
                        <TwitterOutlined />
                    </div>
                </Form>
            </StyledLogin>
        </motion.div>
    );
};

export default Login;
