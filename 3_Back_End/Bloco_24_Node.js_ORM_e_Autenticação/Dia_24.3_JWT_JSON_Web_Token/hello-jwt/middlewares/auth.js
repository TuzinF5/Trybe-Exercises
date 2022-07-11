require('dotenv/config');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: { message: 'Token not found' },
      });
    }

    const verifyToken = jwt.verify(authorization, SECRET);

    req.user = verifyToken.data;

    return next();
  } catch (error) {
    return res.status(401).json({
      error: { message: error.message },
    });
  }
};
