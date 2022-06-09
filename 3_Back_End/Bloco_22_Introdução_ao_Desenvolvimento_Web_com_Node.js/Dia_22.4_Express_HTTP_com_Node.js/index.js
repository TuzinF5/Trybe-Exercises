const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });

  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

////

const leArquivoSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
};

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await leArquivoSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

app.listen('3000', () => console.log('App rodando na porta 3000!'));
