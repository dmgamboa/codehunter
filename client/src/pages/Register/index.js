import React, { useRef } from "react";
import { createUserFb } from "../../context/Auth"
import { useHistory } from "react-router-dom"
import { UserOutlined, LockOutlined, AppleOutlined, FacebookOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox } from 'antd'

import StyledRegistration from "./styled.js"
import createUserDoc from "./axios.js"

const Register = () => {

  const history = useHistory()

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  // Create new user in firebase upon clicking register
  const onFinish = async (values) => {
    const userUID = await createUserFb(values)
    console.log("user uid: " + userUID)
    console.log("values from form: ", values)

    // Axios POST request to create user doc in mongoDb
    createUserDoc(values, userUID)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email.current.value, password.current.value)
    history.push("/")
  }

  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Email
    //       <input ref={email} type="text" />
    //     </label>
    //     <label>
    //       Password
    //       <input ref={password} type="password" />
    //     </label>
    //     <div>
    //       <button type="submit">Sign Up</button>
    //     </div>
    //   </form>
    //   <Link to="login">Log In Page</Link>
    // </div>
 

    <StyledRegistration className="registration">
        <div className="signup">
            <h1>Sign Up</h1>
            <img className="logo" src="../../../assets/logo.svg" alt="codehunter logo"/> 
        </div> 

        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
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

            {/* username field */}
            <Form.Item
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Username!',
                    },
                ]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            {/* First name, last name field */}
            <Form.Item
                name="fullname"
                tooltip="What do you want others to call you?"
                rules={[
                {
                    required: true,
                    message: 'Please input your full name!',
                    whitespace: true,
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="John Smithens" />
            </Form.Item>

            {/* password field */}
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
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
                dependencies={['password']} // I think this refers to above name="password"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
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
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>

            {/* register button */}
            <Form.Item {...tailFormItemLayout} >
                <Button type="primary" htmlType="submit" className="full-length">
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
    </StyledRegistration>
  )
}

export default Register