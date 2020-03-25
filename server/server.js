const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./users");
require("dotenv").config();

// CONFIG
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

// USERS ROUTE
app.use("/users", users);

app.listen(process.env.DB_PORT, () => {
  console.log(`listening on port ${process.env.DB_PORT}.`);
});
