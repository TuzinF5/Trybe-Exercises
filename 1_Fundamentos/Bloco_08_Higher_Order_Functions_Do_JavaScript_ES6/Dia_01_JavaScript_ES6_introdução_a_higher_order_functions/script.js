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
  return callback(betNum, randomNumber)
};
console.log(checkDrawnNumber(4, checkNumber));

// EXERCÍCIO 3
