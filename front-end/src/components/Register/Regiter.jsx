import React, { useState } from "react";
import "./Regiter.css"
function Regiter() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="Register">
      <form  onSubmit={handleSubmit}>
        <input
          value={userData.username}
          placeholder="username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          value={userData.password}
          placeholder="password"
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
