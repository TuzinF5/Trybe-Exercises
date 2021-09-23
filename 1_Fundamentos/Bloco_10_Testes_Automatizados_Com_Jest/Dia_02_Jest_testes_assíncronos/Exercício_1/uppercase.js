const uppercase = (str, callback) => {
  setTimeout(() => {
    const upper = str.toUpperCase()
    callback(upper);
  }, 2000);
};

// uppercase('arthur e foda', (upper) => { // Exemplo de como funciona a função uppercase
//   console.log('dentro da função');
//   console.log(upper);
// })

module.exports = uppercase;
