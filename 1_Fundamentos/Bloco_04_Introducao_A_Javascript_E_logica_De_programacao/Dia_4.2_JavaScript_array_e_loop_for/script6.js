// Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    resultado.push(numbers[index]);
  }
}
if (resultado.length === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(
    "quantidades de numeros impares encontrados: " + resultado.length
  );
}
