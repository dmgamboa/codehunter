import React, { useRef } from "react";
import { useAuth } from "../../context/Auth";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { login } = useAuth();
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        login(email.current.value, password.current.value);
        history.push("/");
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input ref={email} type="text" />
                </label>
                <label>
                    Password
                    <input ref={password} type="password" />
                </label>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <Link to="/signup">Sign Up Page</Link>
        </div>
    );
}
