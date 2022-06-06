const readline = require('readline-sync');

const peso = readline.question('Qual seu peso? ');
const altura = readline.question('Qual sua altura em centímetros? ');

const calculaIMC = (peso, altura) => {
  const alturaEmMetro = altura / 100;
  const resultadoExponencial = Math.pow(alturaEmMetro, 2);
  return (peso / resultadoExponencial).toFixed(2);
};

const resultadoIMC = calculaIMC(peso, altura)

console.log(`Seu IMC é: ${resultadoIMC}`);
