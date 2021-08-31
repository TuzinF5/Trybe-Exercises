// PARTE I

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Exercício 1

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const firstName = Object.values(order.order.delivery);
  const secondName = Object.values(order);
  const telephone = Object.values(order);
  const address = Object.values(order.address);

  console.log(
    `Olá ${firstName[0]}, entrega para: ${secondName[0]}, Telefone: ${telephone[1]}, R. ${address[0]}, N°: ${address[1]}, AP: ${address[2]}`
  );
};

customerInfo(order);

// Exercício 2

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const client = Object.assign({}, order);
  client.name = 'Luiz Silva';
  client.payment.total = '50,00';
  const flavors = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke);

  console.log(
    `Olá ${client.name}, o total do seu pedido de ${flavors[0]}, ${flavors[1]} e ${drinks[0]} é R$ ${client.payment.total}`
  );
};

orderModifier(order);

// PARTE II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const addMorningShift = (object, key, value) => {
  const newObject = object;
  newObject[key] = value;

  console.log(newObject);
};

addMorningShift(lesson2, 'turno', 'manhã');

// Exercício 2

const listKeys = (object) => console.log(Object.keys(object));

listKeys(lesson2);

// Exercício 3

const objectSize = (object) => console.log(Object.keys(object).length);

objectSize(lesson3);

// Exercício 4

const listValues = (object) => console.log(Object.values(object));

listValues(lesson3);

// Exercício 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// Exercício 6

const sumStudents1 = Object.values(allLessons.lesson1);
const sumStudents2 = Object.values(allLessons.lesson2);
const sumStudents3 = Object.values(allLessons.lesson3);
console.log(sumStudents1[1] + sumStudents2[1] + sumStudents3[1]);

// Exercício 7

const position = (object, position) => {
  const art = Object.values(object);
  return art[position];
};

console.log(position(lesson1, 0));

// Exercício 8

function keyValue(object, key, value) {
  const chaves = Object.entries(object);
  let result = '';

  for (let index = 0; index < chaves.length; index += 1) {
    if (chaves[index][0] === key && chaves[index][1] === value) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}
console.log(keyValue(lesson3, 'turno', 'noite'));
