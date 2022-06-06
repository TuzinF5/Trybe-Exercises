const calculaIMC = (peso, altura) => {
  const alturaEmMetro = altura / 100;
  const resultadoExponencial = Math.pow(alturaEmMetro, 2);
  return (peso / resultadoExponencial).toFixed(2);
};
