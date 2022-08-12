const userService = require('../services/userService');

const verifyLogin = async (req, res) => {
  const { email, password } = req.body;
  const logged = await userService.verifyLogin(email, password);
  return res.status(200).json(logged);
};

const registerLogin = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await userService.registerLogin(name, email, password);
  return res.status(201).json(newUser);
};

module.exports = {
  verifyLogin,
  registerLogin,
};