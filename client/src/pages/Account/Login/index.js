import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../../context/Auth"
import { Link, useHistory } from "react-router-dom";
import { MailOutlined, LockOutlined, AppleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import { Form, Input, Button, message } from 'antd'

import StyledLogin from "./styled.js"

const Login = () => {
    const valuesRef = useRef();
    const history = useHistory();
    const { login } = useAuth();

    const [error, setError] = useState();

    const onFinish = async () => {
        const email = valuesRef.current.getFieldValue().email;
        const password = valuesRef.current.getFieldValue().password;

        try {
            await login(email, password);
            message.loading({ content: "Glad to have you back!", duration: 1 })
            history.push("/locations");
        } catch(e) {
            setError("Failed to login, please check your password and email.");
            // Displays loading message
            message.error("Failed to login, check your password and email.")
        }
    };

    return (

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
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                        },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                {/* Password field */}
                <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Password!',
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
                    <Button type="primary" 
                            htmlType="submit" 
                            className="login-form-button">
                        Log in
                    </Button>
                    
                </Form.Item>
                

                <p>Or <Link to="/account/register">register now</Link></p>

                <div className="alternative">
                    <AppleOutlined />
                    <FacebookOutlined />
                    <TwitterOutlined />
                </div>
            </Form>
        </StyledLogin>
    )
}

export default Login