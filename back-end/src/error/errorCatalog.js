const ErrorFactory = require('./errorFactory');

const NOT_FOUND = new ErrorFactory(404, 'Not found');
const CONFLICT = new ErrorFactory(409, 'Conflict');

module.exports = {
  NOT_FOUND,
  CONFLICT,
};