const fs = require('fs/promises');

const criaArquivos = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const leArquivos = [];

  const criaPromessasArquivos = strings.map((element, index) =>
    fs.writeFile(`file${index + 1}.txt`, element)
  );

  await Promise.all(criaPromessasArquivos);

  strings.map((_element, index) => {
    leArquivos.push(fs.readFile(`file${index + 1}.txt`, 'utf-8'));
  });

  const frase = await Promise.all(leArquivos);

  await fs.writeFile('fileAll.txt', frase.join(' '));
};

criaArquivos();
