const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen('3000', () => console.log('App rodando na porta 3000!'));
