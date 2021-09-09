const assert = require('assert');

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

// EXERCÌCIO 1

const expectedResult1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  const booksName = books.map((identification) => {
    return `${identification.name} - ${identification.genre} - ${identification.author.name}`;
  });
  return booksName;
}

assert.deepStrictEqual(formatedBookNames(), expectedResult1);

// EXERCÌCIO 2

const expectedResult2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  let author = books.map((identification) => {
    const ageResult =
      identification.releaseYear - identification.author.birthYear;
    let obj = {
      age: ageResult,
      author: identification.author.name,
    };
    return obj;
  });
  author.sort((age1, age2) => age1.age - age2.age);
  return author;
}

assert.deepStrictEqual(nameAndAge(), expectedResult2);

// EXERCÌCIO 3

const expectedResult3 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const fantasy = books.filter((identification) => {
    return (
      identification.genre === 'Ficção Científica' ||
      identification.genre === 'Fantasia'
    );
  });
  return fantasy;
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

// EXERCÌCIO 4

const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  const currentYear = 2021;
  const olderAge = books
    .filter((identification) => currentYear - identification.releaseYear > 60)
    .sort(
      (releaseYear1, releaseYear2) =>
        releaseYear1.releaseYear - releaseYear2.releaseYear
    );
  return olderAge;
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

// EXERCÌCIO 5

const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const result = fantasyOrScienceFiction();
  const names = result.map((arthur) => {
    return arthur.author.name;
  });
  names.sort();
  return names;
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

// EXERCÌCIO 6

const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const currentYear = 2021;
  const olderAge = books
    .filter((identification) => currentYear - identification.releaseYear > 60)
    .map((identification) => identification.name);
  return olderAge;
}

assert.deepStrictEqual(oldBooks(), expectedResult6);

// EXERCÌCIO 7

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
