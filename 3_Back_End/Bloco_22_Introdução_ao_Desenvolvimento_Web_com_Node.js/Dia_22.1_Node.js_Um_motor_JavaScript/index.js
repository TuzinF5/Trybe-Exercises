const readline = require('readline-sync');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');

const scripts = ['imc', 'sorteio', 'velocidade'];
const script = readline.keyInSelect(scripts, 'Qual script deseja rodar? ');

const main = () => {
  if (script === 0) {
    imc();
  }
  if (script === 1) {
    sorteio();
  }
  if (script === 2) {
    velocidade();
  }
};

main();
