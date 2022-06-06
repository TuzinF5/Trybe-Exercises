const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => distancia / tempo;

const main = () => {
  const distancia = readline.questionInt('Qual a distância em metros? ');
  const tempo = readline.questionInt('Qual o tempo em segundos? ');

  const resultado = velocidadeMedia(distancia, tempo).toFixed(4);

  console.log('\n', `A velocidade média é: ${resultado} m/s!`);
};

module.exports = main;
