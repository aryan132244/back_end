const userModel = require("../model/userModel");
const { validemail, validpassword, validname } = require("../validation/authValidation");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const { name, email, password } = data;

    if (!name) {
      return res.status(400).send({ status: false, message: "name is required" });
    }

    if (!validname(name)) {
      return res.status(400).send({ status: false, message: "name is not valid" });
    }

    if (!email) {
      return res.status(400).send({ status: false, message: "email is required" });
    }

    if (!validemail(email)) {
      return res.status(400).send({ status: false, message: "email is not valid" });
    }

    if (!password) {
      return res.status(400).send({
        status: false,
        message: "password is required"
      });
    }

    if (!validpassword(password)) {
      return res.status(400).send({
        status: false,
        message: "password is not valid"
      });
    }

    // 🔐 hash password
    const hashPassword = await bcrypt.hash(password, 10);
    data.password = hashPassword;

    const DB = await userModel.create(data);

    return res.status(201).send({
      status: true,
      message: "user created successfully",
      data: DB
    });

  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message
    });
  }
};