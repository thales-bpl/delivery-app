const { user } = require('../database/models');
const { NOT_FOUND } = require('../error/errorCatalog');

const postLogin = async (email) => {
  const login = await user.findAll({ where: email });
  if (!login) throw NOT_FOUND;

  // TO-DO: implementar return
  return { message: "logado" };
};

module.exports = {
  postLogin,
};
