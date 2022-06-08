const readline = require('readline-sync');
const fs = require('fs/promises');

// Exercício 6
const escolherArquivo = async () => {
  const caminho = readline.question('Qual o caminho do arquivo que deseja ler? ');

  try {
    const conteudo = await fs.readFile(caminho, 'utf-8');
    console.log('O conteúdo do seu arquivo é: ', '\n', conteudo);
  } catch (error) {
    console.error('Arquivo inexistente');
  }
};
// escolherArquivo();
////
