// Exercício 1

function palindromo(palavra) {
  let separar = palavra.split("");
  let reverso = separar.reverse();
  let juntar = reverso.join("");

  if (juntar === palavra) {
    console.log("true: " + juntar);
  } else {
    console.log("false: " + juntar);
  }
}

palindromo("ARARA");

// Exercício 2

let teste = [2, 3, 6, 7, 10, 1];

function retornaMaiorValor(array) {
  let valor = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > valor) {
      valor = array[index];
      resultado = index;
    }
  }
  return resultado;
}

console.log("O indice de maior valor é:", retornaMaiorValor(teste));

// Exercício 3

let teste = [2, 4, 6, 7, 10, 0, -3];

function retornaMaiorValor(array) {
  let valor = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < valor) {
      valor = array[index];
      resultado = index;
    }
  }
  return resultado;
}

console.log("O indice de menor valor é:", retornaMaiorValor(teste));

// Exercício 4

let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorQuantidadeDeCaracter(array) {
  let nome = nomes[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > nome.length) {
      nome = array[index];
    }
  }
  return nome;
}

console.log(maiorQuantidadeDeCaracter(nomes));

// Exercício 5

let numeros = [2, 3, 2, 5, 8, 2, 3];

function name(params) {
  
}

// Eercício 6

let numero = 100;

function somaNumeros(num) {
  let resultado = 0;
  for (let index = 1; index <= num; index += 1) {
    resultado = resultado + index;
  }
  return resultado;
}

console.log(somaNumeros(numero));

// Exercício 7

let word = "trybe";
let ending = "be";

function formarFrase(word, ending) {
  if (word > ending) {
    console.log("true");
  } else {
    console.log("false");
  }
}

formarFrase(word, ending);