const readline = require('readline-sync');

const tabelaIMC = [
  { IMC: 'Abaixo de 18,5', Situação: 'Abaixo do peso (magreza)' },
  { IMC: 'Entre 18,5 e 24,9', Situação: 'Peso normal' },
  { IMC: 'Entre 25,0 e 29,9', Situação: 'Acima do peso (sobrepeso)' },
  { IMC: 'Entre 30,0 e 34,9', Situação: 'Obesidade grau I' },
  { IMC: 'Entre 35,0 e 39,9', Situação: 'Obesidade grau II' },
  { IMC: '40,0 e acima', Situação: 'Obesidade graus III e IV' },
];

const calculaIMC = (peso, altura) => {
  const alturaEmMetro = altura / 100;
  const resultadoExponencial = Math.pow(alturaEmMetro, 2);
  return (peso / resultadoExponencial).toFixed(2);
};

const categoriaIMC = (IMC) => {
  if (IMC < 18.5) {
    return `Seu IMC se enqudra em: ${tabelaIMC[0].Situação}!`;
  }
  if (IMC >= 18.5 || IMC <= 24.9) {
    return `Seu IMC se enqudra em: ${tabelaIMC[1].Situação}!`;
  }
  if (IMC >= 25 || IMC <= 29.9) {
    return `Seu IMC se enqudra em: ${tabelaIMC[2].Situação}!`;
  }
  if (IMC >= 30 || IMC <= 34.9) {
    return `Seu IMC se enqudra em: ${tabelaIMC[3].Situação}!`;
  }
  if (IMC >= 35 || IMC <= 39.9) {
    return `Seu IMC se enqudra em: ${tabelaIMC[4].Situação}!`;
  }
  if (IMC >= 40) {
    return `Seu IMC se enqudra em: ${tabelaIMC[5].Situação}!`;
  }
};

const main = () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.question('Qual sua altura em centímetros? ');
  const resultadoIMC = calculaIMC(peso, altura);

  console.log('\n', `Seu IMC é: ${resultadoIMC}!`);
  console.log(categoriaIMC(resultadoIMC));
};

module.exports = main;
