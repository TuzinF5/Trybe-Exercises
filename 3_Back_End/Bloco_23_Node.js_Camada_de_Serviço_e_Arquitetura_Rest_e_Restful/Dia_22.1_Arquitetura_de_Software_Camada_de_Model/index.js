const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const validateUser = require('./middlewares/validateUser');
const middlewareError = require('./middlewares/middlewareError');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.post('/user', validateUser, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userId = await User.create({ firstName, lastName, email, password });

  return res.status(201).json({ id: userId, firstName, lastName, email });
});

app.use(middlewareError);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
