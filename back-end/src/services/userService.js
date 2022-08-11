const { User } = require('../database/models');
const { NOT_FOUND, CONFLICT } = require('../error/errorCatalog');
const { encrypt } = require('../utils/md5');
const { generateJWT } = require('../utils/jwt');

const verifyLogin = async (email, password) => {
  const [user] = await User.findAll({ where: { email } });
  const encryptedPass = encrypt(password);
  if (!user || user.password !== encryptedPass) throw NOT_FOUND;

  const { password: passDB, ...userWithoutPass } = user.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

const registerLogin = async (name, email, password) => {
  const [user] = await User.findAll({ where: { email } });
  if (user) throw CONFLICT;

  const encryptedPass = encrypt(password);
  const newUser = await User.create({ name, email, password: encryptedPass, role: 'customer' });

  const { password: passDB, ...userWithoutPass } = newUser.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

module.exports = {
  verifyLogin,
  registerLogin,
};
