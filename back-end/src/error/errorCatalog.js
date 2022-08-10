const ErrorFactory = require('./errorFactory');

const NOT_FOUND = new ErrorFactory(404, 'Not found');

module.exports = {
  NOT_FOUND,
}