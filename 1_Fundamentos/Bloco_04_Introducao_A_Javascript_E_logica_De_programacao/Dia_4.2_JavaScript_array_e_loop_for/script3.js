// Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let element = 0;

for (let index = 0; index < numbers.length; index += 1) {
  element = element + numbers[index];
}
let resultado = element / numbers.length;
console.log("A média aritmética do Array é: " + resultado);
