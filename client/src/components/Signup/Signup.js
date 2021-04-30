import React, { useRef } from 'react';
import { useAuth } from '../../context/Auth'

export default function Signup() {
  const email = useRef();
  const password = useRef();
  const { signup } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    signup(email.current.value, password.current.value);
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
    </div>
  );
}