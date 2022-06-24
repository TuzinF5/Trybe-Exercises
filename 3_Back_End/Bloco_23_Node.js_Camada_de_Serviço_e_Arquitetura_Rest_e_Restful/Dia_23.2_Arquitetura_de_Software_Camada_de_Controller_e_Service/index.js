const bodyParser = require('body-parser');
const express = require('express');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/errorMiddleware');
const validateCep = require('./middlewares/validateCep');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', validateCep, Cep.getCep);

app.use(errorMiddleware);

app.listen(3000, () => console.log('Rodando na porta 3000!'));
