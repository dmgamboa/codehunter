import React, { useRef } from "react";
import { useAuth } from "../../context/Auth"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const email = useRef();
  const password = useRef();
  const { signup } = useAuth();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    signup(email.current.value, password.current.value);
    history.push("/");
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <Link to="login">Log In Page</Link>
    </div>
  );
}