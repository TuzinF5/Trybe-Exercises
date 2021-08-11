function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
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
let days = document.getElementById("days");
let daysLi = document.getElementsByClassName("day");

function criaOsDias(arrayNumbers, elementoPai) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let number = arrayNumbers[index];
    let li = document.createElement("li");
    li.innerText = number;
    li.className = "day";
    elementoPai.appendChild(li);
  }
}

function addClassHoliday(daysLi) {
  for (let index = 0; index < daysLi.length; index += 1) {
    if (
      daysLi[index].innerText === "24" ||
      daysLi[index].innerText === "25" ||
      daysLi[index].innerText === "31"
    ) {
      daysLi[index].classList.add("holiday");
    }
  }
}

function addClassFriday(daysLi) {
  for (let index = 0; index < daysLi.length; index += 1) {
    if (
      daysLi[index].innerText === "4" ||
      daysLi[index].innerText === "11" ||
      daysLi[index].innerText === "18" ||
      daysLi[index].innerText === "25"
    ) {
      daysLi[index].classList.add("friday");
    }
  }
}

criaOsDias(dezDaysList, days);
addClassHoliday(daysLi);
addClassFriday(daysLi);

// EXERCÍCIO 2
