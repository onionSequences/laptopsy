import { useState } from "react";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = e => {
    const { value, name } = e.target;

    name;
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="password"
          id="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
