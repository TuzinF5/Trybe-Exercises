require('dotenv/config');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res) => {
  const { username } = req.body;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const user = {
    username,
    admin: false,
  };

  const token = jwt.sign({ data: user }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
