function encode(string) {
  let palavraMinuscula = string.toLowerCase();
  let arrayCode = [];
  for (let index = 0; index < palavraMinuscula.length; index += 1) {
    if (palavraMinuscula[index] === 'a') {
      arrayCode.push(1);
    } else if (palavraMinuscula[index] === 'e') {
      arrayCode.push(2);
    } else if (palavraMinuscula[index] === 'i') {
      arrayCode.push(3);
    } else if (palavraMinuscula[index] === 'o') {
      arrayCode.push(4);
    } else if (palavraMinuscula[index] === 'u') {
      arrayCode.push(5);
    } else {
      arrayCode.push(palavraMinuscula[index]);
    }
  }
  let frase = arrayCode.join('');
  return frase;
}

function decode(string) {
  let palavraMinuscula = string.toLowerCase();
  let arrayCode = [];
  for (let index = 0; index < palavraMinuscula.length; index += 1) {
    if (palavraMinuscula[index] === '1') {
      arrayCode.push('a');
    } else if (palavraMinuscula[index] === '2') {
      arrayCode.push('e');
    } else if (palavraMinuscula[index] === '3') {
      arrayCode.push('i');
    } else if (palavraMinuscula[index] === '4') {
      arrayCode.push('o');
    } else if (palavraMinuscula[index] === '5') {
      arrayCode.push('u');
    } else {
      arrayCode.push(palavraMinuscula[index]);
    }
  }
  let frase = arrayCode.join('');
  return frase;
}

module.exports = {
  encode,
  decode,
};
