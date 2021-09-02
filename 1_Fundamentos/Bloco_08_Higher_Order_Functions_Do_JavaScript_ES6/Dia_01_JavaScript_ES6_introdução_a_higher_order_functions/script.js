// EXERCÍCIO 1

const nameEmail = (name) => {
  let fullName = name.toLowerCase().split(' ').join('_');
  const object = {
    nomeCompleto: name,
    email: `${fullName}@trybe.com`,
  };
  return object;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.log(newEmployees(nameEmail));

// EXERCÍCIO 2

const checkNumber = (number, drawnNumber) => {
  if (number === drawnNumber) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

const checkDrawnNumber = (betNumber, callback) => {
  const betNum = betNumber;
  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  console.log(randomNumber);
  return callback(betNum, randomNumber);
};
console.log(checkDrawnNumber(4, checkNumber));

// EXERCÍCIO 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (array1, array2) => {
  let result = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array2[index] === 'N.A') {
      result = result;
    } else if (array1[index] === array2[index]) {
      result += 1;
    } else {
      result -= 0.5;
    }
  }
  return result;
};

const answerCount = (correctArray, studentArray, callback) => {
  const array1 = correctArray;
  const array2 = studentArray;
  return callback(array1, array2);
};

console.log(answerCount(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
