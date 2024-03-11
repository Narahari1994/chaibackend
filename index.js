require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("code with hitesh chai aur code");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login with chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running at port: ${port}`)
);
