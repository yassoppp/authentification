const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
app.use(express.urlencoded({ extended: false }));

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  console.log("hi");
  try {
    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(req.body.password, salt);
    const user = { username: req.body.username, password: hashed_password };
    users.push(user);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name == req.body.name);
  if (user == null) {
    return res.status(400).send("cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log(req.body.password);
      console.log(user.password);
      res.send("success");
    } else {
      res.send("not allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
