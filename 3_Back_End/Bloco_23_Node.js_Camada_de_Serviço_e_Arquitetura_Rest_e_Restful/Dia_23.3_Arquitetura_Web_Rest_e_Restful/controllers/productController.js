const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  if (!products.length) return res.status(404).json({ message: 'Sem produtos cadastrados!' });

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'Os campos são obrigatórios' });

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (products) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'Os campos são obrigatórios' });

  const products = await ProductModel.update(req.params.id, name, brand);

  if (products.affectedRows === 0) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(204).end();
});

module.exports = router;