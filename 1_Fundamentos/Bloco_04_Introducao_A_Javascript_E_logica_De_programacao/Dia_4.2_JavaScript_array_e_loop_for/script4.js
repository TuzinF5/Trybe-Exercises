// Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let element = 0;

for (let index = 0; index < numbers.length; index += 1) {
  element = element + numbers[index];
}
let resultado = element / numbers.length;
if (resultado > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
