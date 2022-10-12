import React, { useState } from "react";
import "./Regiter.css";
function Regiter() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="Register">
      <form action="http://localhost:3001/users" method="POST">
        <h1>Register</h1>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Regiter;
