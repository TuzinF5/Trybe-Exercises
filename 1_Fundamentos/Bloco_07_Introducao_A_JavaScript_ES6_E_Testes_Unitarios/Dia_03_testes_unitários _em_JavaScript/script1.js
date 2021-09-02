// PARTE I

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exercício 1.1
assert.strictEqual(sum(4, 5), 9);

// Exercício 1.2
assert.strictEqual(sum(0, 0), 0);

// Exercício 1.3 e 1.4
assert.strictEqual(sum(4, '5'), 9);
