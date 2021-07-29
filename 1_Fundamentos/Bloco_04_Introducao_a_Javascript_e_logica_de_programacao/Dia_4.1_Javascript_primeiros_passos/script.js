// exercício 1

let a = 10;
let b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercício 2

let c = 10;
let d = 15;

if (c > d) {
  console.log("Esse é o maior " + c);
} else {
  console.log("Esse é o maior " + d);
}

// exercício 3

let e = 10;
let f = 15;
let g = 20;

if (e > f && e > g) {
  console.log("Esse é o maior " + e);
} else if (f > e && f > g) {
  console.log("Esse é o maior " + f);
} else {
  console.log("Esse é o maior " + g);
}

// exercício 4

let h = 0;

if (h > 0) {
  console.log("positive");
} else if (h < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// exercício 5

let i = -60;
let j = -60;
let k = -60;

if (i + j + k === 180) {
  console.log("true")
} else if (i + j + k > 0) {
  console.log("false");
} else {
  console.warn("erro")
}

// exercício 6

let peca = "bIsPo";

switch (peca.toLowerCase()) {
  case 'rei':
    console.log("rei -> " + "horizontal, vertical, diagonal");
    break;
  case 'rainha':
    console.log("rainha -> " + "horizontal, vertical, diagonal");
    break;
  case 'bispo':
    console.log("bispo -> " + "diagonal");
    break;
  case 'cavalo':
    console.log("cavalo -> " + "em forma de L");
    break;
  case 'torre':
    console.log("torre -> " + "vertical ou horizontal");
    break;
  case 'peão':
    console.log("peão -> " + "para frente e somente captura outras peças na diagonal");
    break;
  default:
    console.log("peça invalida");
}

// exercício 7

let porcent = "75%";
let num = parseInt(porcent);


if (num < 0 || num > 100){
  console.log("erro")
} else if (num >= 90) {
  console.log("A");
} else if (num >= 80) {
  console.log("B");
} else if (num >= 70) {
  console.log("C");
} else if (num >= 60) {
  console.log("D");
} else if (num >= 50) {
  console.log("E");
} else if (num > 50) {
  console.log("F");
}

// exercício 8

let num1 = 37;
let num2 = 46;
let num3 = 57;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}

// exercício 9

let num4 = 89;
let num5 = 46;
let num6 = 57;

if (num4 % 2 === 1 || num5 % 2 === 1 || num6 % 2 === 1) {
  console.log("true");
} else {
  console.log("false");
}
