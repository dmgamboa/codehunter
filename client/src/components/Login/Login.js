import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username
          <input type="text" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}