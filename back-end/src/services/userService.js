const { user } = require('../database/models');
const { NOT_FOUND, CONFLICT } = require('../error/errorCatalog');
const { encrypt } = require('../utils/md5');
const { generateJWT } = require('../utils/jwt');

const verifyLogin = async (email, password) => {
  const [User] = await user.findAll({ where: { email } });
  const encryptedPass = encrypt(password);
  if (!User || User.password !== encryptedPass) throw NOT_FOUND;

  const { password: passDB, ...userWithoutPass } = User.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

const registerLogin = async (name, email, password) => {
  const [User] = await user.findAll({ where: { email } });
  if (User) throw CONFLICT;

  const encryptedPass = encrypt(password);
  const newuser = await user.create({ name, email, password: encryptedPass, role: 'customer' });

  const { password: passDB, ...userWithoutPass } = newuser.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

module.exports = {
  verifyLogin,
  registerLogin,
};
