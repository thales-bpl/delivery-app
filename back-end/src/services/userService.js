const { User } = require('../database/models');
const { NOT_FOUND } = require('../error/errorCatalog');

const postLogin = async (email) => {
  console.log('login service - ', email)
  const login = await User.findAll({ where: { email } });
  console.log('apos a consulta na model - ',login);
  if (!login) throw NOT_FOUND;

  // TO-DO: implementar return
  return { message: "logado" };
};

module.exports = {
  postLogin,
};
