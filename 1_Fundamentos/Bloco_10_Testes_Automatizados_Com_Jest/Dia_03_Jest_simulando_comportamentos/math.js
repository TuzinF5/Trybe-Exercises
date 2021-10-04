const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(2000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

const result = (a) => {
  let fact = a;
  for (let i = 1; i < a; i += 1) {
    fact *= i;
  }
  return fact;
}

console.log(result(5)); 