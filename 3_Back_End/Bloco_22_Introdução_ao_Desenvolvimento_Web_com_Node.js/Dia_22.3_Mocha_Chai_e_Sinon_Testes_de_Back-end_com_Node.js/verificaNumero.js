const verificaNumero = (number) => {
  const resultado = Math.sign(number);

  if (resultado === 1) return 'positivo';
  if (resultado === -1) return 'negativo';
  if (resultado === 0) return 'neutro';
};

module.exports = verificaNumero;
