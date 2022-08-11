const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'SECRET_KEY';

const jwtConfig = {
  expiresIn: '60m',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, secretKey, jwtConfig);
  return token;
};

const verifyToken = async (token) => {
  const verified = jwt.verify(token, secretKey);
  return verified;
};

module.exports = {
  generateJWT,
  verifyToken,
};