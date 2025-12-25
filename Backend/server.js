const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

//fake database for learning
let users = [];

//sign up
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    //check if user already exists
    const userExists = users.find(u => u.username === username);    
    if (userExists) {
        return res.json({success: false, message:"User already exists"});
    }

    users.push({username, password});
    res.json({success: true, message:"Signup successful"});
});

//sign in 
app.post("/signin", (req, res) => {
    const {username, password} = req.body;

    const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
