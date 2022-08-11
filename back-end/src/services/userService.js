const { User } = require('../database/models');
const { NOT_FOUND } = require('../error/errorCatalog');
const { encrypt } = require('../utils/md5');
const { generateJWT } = require('../utils/jwt');

const postLogin = async (email, password) => {
  const [user] = await User.findAll({ where: { email } });
  const encryptedPass = encrypt(password);
  if (!user || user.password !== encryptedPass) throw NOT_FOUND;

  const { password: passDB, ...userWithoutPass } = user.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

module.exports = {
  postLogin,
};
