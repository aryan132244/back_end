const express = require("express");;
const route = express.Router()

const {creatuser} = require("../controler/usercontroler")

route.post("/createuser",creatuser)

module.exports = route