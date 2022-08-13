const { user } = require('../database/models');
const { NOT_FOUND, CONFLICT } = require('../error/errorCatalog');
const { encrypt } = require('../utils/md5');
const { generateJWT } = require('../utils/jwt');

const getAll = async () => {
  const allUsers = await user.findAll();
  return allUsers;
};

const verifyLogin = async (email, password) => {
  const [currentUser] = await user.findAll({ where: { email } });
  const encryptedPass = encrypt(password);
  if (!currentUser || currentUser.password !== encryptedPass) throw NOT_FOUND;

  const { password: passDB, ...userWithoutPass } = currentUser.dataValues;
  const token = generateJWT(userWithoutPass);

  return { ...userWithoutPass, token };
};

const registerLogin = async (name, email, password) => {
  const [currentUser] = await user.findAll({ where: { email } });
  if (currentUser) throw CONFLICT;

  const encryptedPass = encrypt(password);
  const newuser = await user.create({ name, email, password: encryptedPass, role: 'customer' });

  // const { password: passDB, id, ...userWithoutPass } = newuser.dataValues;
  const { role, id, ...userWithouRole } = newuser.dataValues;
  // const token = generateJWT(userWithoutPass);

  return { ...userWithouRole };
};

module.exports = {
  verifyLogin,
  registerLogin,
  getAll,
};
