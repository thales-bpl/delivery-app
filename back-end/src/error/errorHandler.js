const ErrorFactory = require('./errorFactory');

const errorHandler = (err, _req, res, _next) => {
  console.log(err.message);
  
  if (err instanceof ErrorFactory) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: 'Internal Server Error' });

  // err instanceof ErrorFactory
  // ? res.status(err.status).json({ message: err.message })
  // : res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
