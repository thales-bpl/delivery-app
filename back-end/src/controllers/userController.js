const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const allUsers = await userService.getAll();
  return res.status(200).json(allUsers);
};

const getAllSellers = async (_req, res) => {
  const allSellers = await userService.getAllSellers();
  return res.status(200).json(allSellers);
};

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
  getAll,
  getAllSellers,
  verifyLogin,
  registerLogin,
};