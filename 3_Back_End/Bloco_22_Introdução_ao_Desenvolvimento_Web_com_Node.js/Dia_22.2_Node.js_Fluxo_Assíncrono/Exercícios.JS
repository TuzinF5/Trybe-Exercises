const somaMultiplica = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      return reject('Informe apenas números');
    }

    const resultado = (a + b) * c;

    if (resultado < 50) {
      return reject('Valor muito baixo');
    }

    resolve(resultado);
  });
};
