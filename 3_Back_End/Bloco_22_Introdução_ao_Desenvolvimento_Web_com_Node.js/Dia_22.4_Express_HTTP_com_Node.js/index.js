const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());

const verificaToken = (token) => {
  if (token.length > 16 || token.length < 16) return false;
  return true;
};

app.get('/ping', (req, res) => {
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  return res.status(201).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });

  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

////

const leArquivoSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
};

app.get('/simpsons', async (req, res) => {
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  try {
    const simpsons = await leArquivoSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  try {
    const simpsons = await leArquivoSimpsons();
    const simpson = simpsons.find((simpson) => simpson.id === id);

    if (!simpson) return res.status(404).json({ message: 'simpson not found' });

    return res.status(200).json(simpson);
  } catch (error) {
    console.log(error.message);
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const { authorization } = req.headers;
  const respostaToken = verificaToken(authorization);

  if (!respostaToken)
    return res.status(401).json({ message: 'Token inválido!' });

  try {
    const simpsons = await leArquivoSimpsons();
    const simpson = simpsons.find((simpson) => simpson.id === id);

    if (simpson) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
    return res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

////

const gerarToken = () => crypto.randomBytes(8).toString('hex');

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: 'missing fields' });

  const token = gerarToken();

  return res.status(200).json({ token });
});

app.listen('3000', () => console.log('App rodando na porta 3000!'));
