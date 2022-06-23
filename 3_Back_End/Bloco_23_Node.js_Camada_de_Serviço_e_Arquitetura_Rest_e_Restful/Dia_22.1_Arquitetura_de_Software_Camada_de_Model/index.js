const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const validateUser = require('./middlewares/validateUser');
const middlewareError = require('./middlewares/middlewareError');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await User.getAll();
  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  return res.status(200).json(user);
});

app.post('/user', validateUser, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userId = await User.create({ firstName, lastName, email, password });

  return res.status(201).json({ id: userId, firstName, lastName, email });
});

app.use(middlewareError);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
