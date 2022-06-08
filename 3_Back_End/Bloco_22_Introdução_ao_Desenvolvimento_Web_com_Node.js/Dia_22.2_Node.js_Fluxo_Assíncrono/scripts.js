const readline = require('readline-sync');
const fs = require('fs/promises');

// Exercício 6
const escolherArquivo = async () => {
  const caminho = readline.question(
    'Qual o caminho do arquivo que deseja ler? '
  );

  try {
    const conteudo = await fs.readFile(caminho, 'utf-8');
    console.log('O conteúdo do seu arquivo é: ', '\n', conteudo);
  } catch (error) {
    console.error('Arquivo inexistente');
  }
};
// escolherArquivo();
////

// Exercício 7
const substituiPalavraArquivo = async () => {
  try {
    const caminho = readline.question(
      'Qual o caminho do arquivo que deseja ler? '
    );
    const conteudo = await fs.readFile(caminho, 'utf-8');

    const palavraAntiga = readline.question('Qual palavra deseja substituir? ');
    const palavraNova = readline.question('Qual será a nova palavra? ');

    const novoconteudo = conteudo.replace(palavraAntiga, palavraNova);

    console.log('O novo conteúdo do seu arquivo é: ', '\n', novoconteudo);

    const caminhoDestino = readline.question(
      'Qual o caminho para salvar o novo arquivo? '
    );

    await fs.writeFile(caminhoDestino, novoconteudo);

    console.log('Arquivo salvo!');
  } catch (error) {
    console.error(error.message);
  }
};
// substituiPalavraArquivo();
////

// Exercício 8
const FizzBuzz = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 15 === 0) return resolve('FizzBuzz');
    if (number % 3 === 0) return resolve('Fizz');
    if (number % 5 === 0) return resolve('Buzz');
    return reject(number);
  });
};

const main = async () => {
  try {
    const resultado = await FizzBuzz(2);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
// main();
