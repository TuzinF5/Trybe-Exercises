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

const numeroAleatorio = () => Math.floor(Math.random() * 100 + 1);

const num1 = numeroAleatorio();
const num2 = numeroAleatorio();
const num3 = numeroAleatorio();

const main = async () => {
  try {
    const resposta = await somaMultiplica(num1, num2, num3);
    console.log(resposta);
  } catch (error) {
    console.error(error);
  }
};

main();
