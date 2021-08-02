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
