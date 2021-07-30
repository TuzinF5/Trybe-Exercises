// Exercício 1

let n = 5;
let asterisco = "*";
let resultado = "";

if (n > 1) {
  for (let index = 1; index <= n; index += 1) {
    resultado += asterisco;
  }
  for (let indice = 1; indice <= n; indice += 1) {
    console.log(resultado);
  }
}
