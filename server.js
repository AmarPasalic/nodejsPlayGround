const express = require("express");
const cors = require("cors")

const users=[]

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "User created", user });
  });
  
  app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    users.filter((user) => user.id !== id);
    res.json({ message: "User deleted", users });
  });


  

app.get("/users", (req, res) => {
    res.json(users);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});