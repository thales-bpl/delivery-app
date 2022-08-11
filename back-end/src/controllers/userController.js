const userService = require('../services/userService');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const logged = await userService.postLogin(email, password);
  return res.status(200).json(logged);
};

module.exports = {
  postLogin,
};