const express = require("express");
const route = express.Router();

const { createUser } = require("../controler/usercontroler");

route.post("/createuser", createUser);

module.exports = route;
console.log(creatuser);