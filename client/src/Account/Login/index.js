import React, { useRef, useEffect } from "react";
import { useAuth } from "../../../context/Auth"
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined, AppleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'

import StyledLogin from "./styled.js"

// import firebaseUI from "../../context/firebaseLoginUI.js"
// import { firebaseUI } from "../../firebase.js"

// firebaseUI()

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const email = useRef();
  // const password = useRef();
  // const { login } = useAuth();
  const history = useHistory()

  function handleRegister(event) {
    event.preventDefault();
    // login(email.current.value, password.current.value);
    history.push("/register")
  }

  useEffect(() => {
    firebaseUI()
  }, [])

  return (
    <StyledLogin>

    </StyledLogin>

    // <StyledLogin className="login">
    //   <h1 className="welcome"> Welcome Back to CodeHunter.</h1>
    //   <Form
    //       name="normal_login"
    //       className="login-form"
    //       initialValues={{
    //       remember: true,
    //       }}
    //       onFinish={onFinish}
    //   >

    //     {/* username field */}
    //     <Form.Item
    //     name="username"
    //     rules={[
    //         {
    //         required: true,
    //         message: 'Please input your Username!',
    //         },
    //     ]}
    //     >
    //     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" ref={email}/>
    //     </Form.Item>

    //     {/* Password field */}
    //     <Form.Item
    //     name="password"
    //     rules={[
    //         {
    //         required: true,
    //         message: 'Please input your Password!',
    //         },
    //     ]}
    //     >
    //     <Input
    //         prefix={<LockOutlined className="site-form-item-icon" />}
    //         type="password"
    //         placeholder="Password"
    //     />
    //     </Form.Item>

    //     {/* Remember me check box */}
    //     <Form.Item>

    //     {/* Button previously an a tag */}
    //     <a className="login-form-forgot" href="#">
    //         Forgot password
    //     </a>
    //     </Form.Item>

    //     {/* login button */}
    //     <Form.Item className="login-btn">
    //         <Button type="primary" htmlType="submit" className="login-form-button">
    //             Log in
    //         </Button>
            
    //     </Form.Item>
        
    //     {/* <div onClick={register}><span>or</span> Register now</div> */}
    //     <div onClick={handleRegister}><span>or</span> Register now</div>

    //     <div className="alternative">
    //         <AppleOutlined />
    //         <FacebookOutlined />
    //         <TwitterOutlined />
    //     </div>
    //   </Form>
    // </StyledLogin>
  )
}

export default Login