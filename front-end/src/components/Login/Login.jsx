import React from "react";
import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="Register">
      <form action="http://localhost:3000/users" method="POST">
        <input
          value={userData.username}
          placeholder="username"
          name="username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          value={userData.password}
          placeholder="password"
          name="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
