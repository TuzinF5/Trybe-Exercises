const readline = require('readline-sync');

const numeroSorteio = () => Math.floor(Math.random() * 11);

const sorteio = (numUsu, resultado) => {
  if (numUsu === resultado) {
    console.log('Parabéns, número correto!', '\n');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${resultado}!`, '\n');
  }
};

const main = () => {
  const resultado = numeroSorteio();

  const numeroUsuario = readline.questionInt('Qual será o número? ');

  sorteio(numeroUsuario, resultado);

  const novaTentativa = readline.keyInYNStrict('Quer tentar de novo? ');

  if (novaTentativa) {
    main();
  }
};

module.exports = main;
