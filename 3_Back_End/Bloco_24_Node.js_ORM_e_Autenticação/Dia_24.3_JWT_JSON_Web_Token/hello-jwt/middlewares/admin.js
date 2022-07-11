require('dotenv/config');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const {
      data: { admin },
    } = jwt.decode(authorization, SECRET);

    if (!admin) {
      return res.status(403).json({
        error: { message: 'Restricted access' },
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      error: { message: error.message },
    });
  }
};
