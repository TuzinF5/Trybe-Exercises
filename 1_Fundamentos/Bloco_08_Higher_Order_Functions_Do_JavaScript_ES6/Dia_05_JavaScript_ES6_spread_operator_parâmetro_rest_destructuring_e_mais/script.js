const getNationality = ({ firstName, nationality = 'Brazilian' }) => {
  return `${firstName} is ${nationality}`;
};

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  doidao: 'maluco',
  nationality: 'Russian',
  porra: 'maluco',
  maluco: 'doido',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
