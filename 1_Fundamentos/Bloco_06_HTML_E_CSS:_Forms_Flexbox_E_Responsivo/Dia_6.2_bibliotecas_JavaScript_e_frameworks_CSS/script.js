function createStates() {
  const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
  const select = document.getElementById('estados');

  for (let index = 0; index < states.length; index += 1) {
    let state = document.createElement('option');
    state.innerText = states[index];
    select.appendChild(state);
  }
}

function checkDate() {
  const data = document.getElementById('data-de-inicio');
  const day = parseInt(data.value.substring(0, 2), 10);
  const month = parseInt(data.value.substring(3, 5), 10);
  const year = parseInt(data.value.substring(6), 10);
  let bar = [];
  bar.push(data.value.substring(2, 3));
  bar.push(data.value.substring(5, 6));

  if (
    bar[(0, 1)] === '/' &&
    day > 0 &&
    day <= 31 &&
    month > 0 &&
    month <= 12 &&
    year > 0
  ) {
    // console.log(bar, typeof bar);
    // console.log(day, typeof day);
    // console.log(month);
    // console.log(year);
  } else {
    alert('Data inválida');
  }
}

function interrupts(event) {
  event.preventDefault();
}

() => {
  const sendButton = document.querySelector('#send');

  createStates();

  sendButton.addEventListener('click', checkDate);
  sendButton.addEventListener('click', interrupts);
};
