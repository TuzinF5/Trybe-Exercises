require('dotenv/config');
const fs = require('fs/promises');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res) => {
  try {
    const { username } = req.body;

    const user = {
      username,
      admin: false,
    };

    const number = Math.floor(Math.random() * 100);

    if (number > 50) {
      user.admin = true;
    }

    const dataUsers = JSON.parse(
      await fs.readFile('./models/data/users.json', 'utf-8')
    );

    const userExists = dataUsers.find(
      (element) => element.username === username
    );

    if (userExists) {
      return res.status(409).json({
        error: { message: 'user already exists' },
      });
    }

    dataUsers.push(user);

    await fs.writeFile('./models/data/users.json', JSON.stringify(dataUsers));

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, SECRET, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
