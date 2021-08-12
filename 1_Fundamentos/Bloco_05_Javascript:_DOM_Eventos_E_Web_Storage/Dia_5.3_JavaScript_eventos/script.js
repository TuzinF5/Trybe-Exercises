function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCÍCIO 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let days = document.getElementById('days');
let daysLi = document.getElementsByClassName('day');

function criaOsDias(arrayNumbers, elementoPai) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let number = arrayNumbers[index];
    let li = document.createElement('li');
    li.innerText = number;
    li.className = 'day';
    elementoPai.appendChild(li);
  }
}

function addClassHoliday(daysLi) {
  for (let index = 0; index < daysLi.length; index += 1) {
    if (
      daysLi[index].innerText === '24' ||
      daysLi[index].innerText === '25' ||
      daysLi[index].innerText === '31'
    ) {
      daysLi[index].classList.add('holiday');
    }
  }
}

function addClassFriday(daysLi) {
  for (let index = 0; index < daysLi.length; index += 1) {
    if (
      daysLi[index].innerText === '4' ||
      daysLi[index].innerText === '11' ||
      daysLi[index].innerText === '18' ||
      daysLi[index].innerText === '25'
    ) {
      daysLi[index].classList.add('friday');
    }
  }
}

criaOsDias(dezDaysList, days);
addClassHoliday(daysLi);
addClassFriday(daysLi);

// EXERCÍCIO 2

let divButtons = document.querySelector('.buttons-container');

function createButtonHoliday(stringHolidays) {
  let button = document.createElement('button');
  button.innerText = stringHolidays;
  button.id = 'btn-holiday';
  divButtons.appendChild(button);
}

createButtonHoliday('Feriados');

// EXERCÍCIO 3

let button = document.querySelector('#btn-holiday');

function changeBackgroundColor() {
  let holiday = document.querySelectorAll('.holiday');
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === '') {
      holiday[index].style.backgroundColor = 'aqua';
    } else {
      holiday[index].style.backgroundColor = '';
    }
  }
}

button.addEventListener('click', changeBackgroundColor);

// EXERCÍCIO 4

function createButtonFriday(stringFriday) {
  let button = document.createElement('button');
  button.innerText = stringFriday;
  button.id = 'btn-friday';
  divButtons.appendChild(button); //variavel já criada na linha 76
}

createButtonFriday('Sexta-Feira');

// EXERCÍCIO 5

let buttonFriday = document.querySelector('#btn-friday');

function changeStyle() {
  let numero = ['4', '11', '18', '25'];
  let friday = document.querySelectorAll('.friday');
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerText === numero[index]) {
      friday[index].innerText = 'SEXTA-FEIRA';
    } else {
      friday[index].innerText = numero[index];
    }
  }
}

buttonFriday.addEventListener('click', changeStyle);

// EXERCÍCIO 6

// EXERCÍCIO 7

let divMyTasks = document.querySelector('.my-tasks');

function addTask(tarefa) {
  let span = document.createElement('span');
  span.innerText = tarefa;
  divMyTasks.appendChild(span);
}

addTask('cozinhar');

// EXERCÍCIO 8

function colorDiv(cor) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  divMyTasks.appendChild(div); //variavel já criada na linha 137
}

colorDiv('aqua');

// EXERCÍCIO 9

