const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const verifyProductName = require('./middlewares/verifyProductName');
const verifyInfos = require('./middlewares/verifyInfos');
const verifySaleDate = require('./middlewares/verifySaleDate');
const verifyWarrantyPeriod = require('./middlewares/verifyWarrantyPeriod');
const verifyFields = require('./middlewares/verifyFields');

const app = express();

app.use(bodyParser.json());

app.post(
  '/sales',
  verifyProductName,
  verifyInfos,
  verifySaleDate,
  verifyWarrantyPeriod,
  (_req, res) => {
    return res.status(201).json({ message: 'Venda cadastrada com sucesso' });
  }
);

app.post('/signup', verifyFields, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

app.listen('3001', () => console.log('App rodando na porta 3001! 🚀'));
