import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    UserOutlined,
    LockOutlined,
    AppleOutlined,
    FacebookOutlined,
    TwitterOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Checkbox, message } from "antd";

import { useAuth } from "../../../context/Auth";

import StyledRegistration from "./styled";
import { createUser } from "../axios";

import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import Icon from "@ant-design/icons";

const Register = () => {
    // const tailFormItemLayout = {
    //     wrapperCol: {
    //         xs: {
    //             span: 24,
    //             offset: 0,
    //         },
    //         sm: {
    //             span: 16,
    //             offset: 8,
    //         },
    //     },
    // };

    var valuesRef = useRef();
    var { signup, getUser } = useAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    // Create new user in firebase upon clicking register
    const onFinish = async () => {
        let values = valuesRef.current.getFieldValue();
 
        try {
            setError("");
            // Prevent user from spam clicking register
            setLoading(true);

            // Wait for firebase to create user
            await signup(values.email, values.password);

            // Axios POST request to create user doc in MongoDB
            await createUser(values, getUser());

            message.loading({ content: "Validating your CodeHunter license.", duration: 2 });
            history.push("/locations");
        } catch (e) {
            setError("Error creating account, try a different email.");
        } finally {
            setLoading(false);
        }

        if (error) {
            message.error(error);
        }
    };

    return (
        <StyledRegistration className="registration">
            <div className="signup">
                <h1>Sign Up</h1>
                <Icon component={Logo} className="logo" />
            </div>

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

                {/* username field */}
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>

                {/* First name, last name field */}
                <Form.Item
                    name="fullname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: "Please input your full name!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="John Smithens"
                    />
                </Form.Item>

                {/* password field */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            min: 6,
                            required: true,
                            message: "At least 6 characters required",
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                {/* confirm password field */}
                <Form.Item
                    name="confirm"
                    dependencies={["password"]} // I think this refers to above name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error("The passwords you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                        new Error("Accept the agreement to register.")
                                    ),
                        },
                    ]}
                    // {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>

                {/* register button */}
                {/* <Form.Item {...tailFormItemLayout}> */}
                <Form.Item>
                    <Button
                        disabled={loading}
                        type="primary"
                        htmlType="submit"
                        // className="full-length"
                        block
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>

            <p>or sign up with</p>
            <div className="alternative">
                <AppleOutlined />
                <FacebookOutlined />
                <TwitterOutlined />
            </div>

            <p>
                Already have an account? <Link to="/account/login">Login.</Link>
            </p>
        </StyledRegistration>
    );
};

export default Register;
