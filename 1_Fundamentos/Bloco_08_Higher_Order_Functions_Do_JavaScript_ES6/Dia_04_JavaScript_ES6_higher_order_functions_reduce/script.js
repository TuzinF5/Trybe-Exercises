// EXERCÌCIO 1

const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  let array = [];
  arrays.forEach((element) => {
    element.forEach((element) => {
      array.push(element);
    });
  });
  return array;
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Para os exercícios 2, 3 e 4 considere o seguinte array:

// const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// EXERCÌCIO 2

const expectedResult2 =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

function reduceNames() {
  // escreva seu código aqui
  const nomes = books
    .reduce((accumulator, element) => {
      return (accumulator += `${element.author.name}, `);
    }, '')
    .replace(/(, )$/, '.');
  let obj = nomes;
  return obj;
}
assert.strictEqual(reduceNames(), expectedResult2);

// EXERCÌCIO 3

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const result = books.reduce((accumulator, element) => {
    accumulator += element.releaseYear - element.author.birthYear;
    return accumulator;
  }, 0);
  return result / books.length;
}
assert.strictEqual(averageAge(), expectedResult3);

// EXERCÌCIO 4

const expectedResult4 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  const result = books.reduce((accumulator, element) => {
    accumulator < element.name.length ? (accumulator = element) : accumulator;
    return accumulator;
  }, 0);
  return result;
}

assert.deepStrictEqual(longestNamedBook(), expectedResult4);

// EXERCÌCIO 5

// const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const result = names.reduce(
    (accumulator, element) =>
      accumulator +
      element
        .split('')
        .reduce(
          (totale, letraAtuale) =>
            letraAtuale.toLowerCase() === 'a' ? totale + 1 : totale,
          0
        ),
    0
  );
  return result;
}
assert.deepStrictEqual(containsA(), 20);

// EXERCÌCIO 6

// const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const result1 = grades.map(
  (element) =>
    element.reduce((accumulator, element) => (accumulator += element)) /
    element.length
);

function studentAverage() {
  // escreva seu código aqui
  const result = students.map((element, index) => ({
    ['name']: element,
    ['average']: result1[index],
  }));
  return result;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
