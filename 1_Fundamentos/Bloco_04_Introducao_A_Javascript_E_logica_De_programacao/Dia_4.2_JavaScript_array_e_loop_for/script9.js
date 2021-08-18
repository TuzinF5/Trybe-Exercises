// Exercicicio 9

let numero = [];
let resultado = [];

for (let index = 1; index <= 25; index += 1) {
  numero.push(index);
}
for (let indice = 0; indice < numero.length; indice++) {
  resultado.push(numero[indice] / 2);
}
console.log(resultado);
