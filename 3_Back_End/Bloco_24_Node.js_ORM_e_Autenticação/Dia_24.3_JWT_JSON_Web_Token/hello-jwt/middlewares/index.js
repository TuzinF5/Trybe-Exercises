const error = require('./error');
const validateLoginBody = require('./validateLoginBody');
const auth = require('./auth');
const admin = require('./admin');

module.exports = {
  error,
  validateLoginBody,
  auth,
  admin,
};
