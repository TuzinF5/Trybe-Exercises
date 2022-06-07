const fs = require('fs/promises');

// Exercício 4.1
const lerArquivo = async () => {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const arraySimpsons = JSON.parse(simpsons);
    return arraySimpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (error) {
    console.error(error);
  }
};
// lerArquivo();
////

// Exercício 4.2
const personagemID = async (id) => {
  const personagens = await fs.readFile('./simpsons.json', 'utf-8');
  const arraySimpsons = JSON.parse(personagens);
  const personagem = arraySimpsons.find((element) => element.id === id);

  return new Promise((resolve, reject) => {
    if (!personagem) {
      return reject('id não encontrado');
    }

    resolve(personagem);
  });
};

const resolvePersonagemID = async () => {
  try {
    const personagem = await personagemID(3);
    console.log(personagem);
  } catch (error) {
    console.error(error);
  }
};
// resolvePersonagemID();
////

// Exercício 4.3
const alteraSimpsons = async () => {
  const personagens = await fs.readFile('./simpsons.json', 'utf-8');
  const arraySimpsons = JSON.parse(personagens);
  const resultado = arraySimpsons.filter(({ id }) => id !== '6' && id !== '10');

  await fs.writeFile('./simpsons.json', JSON.stringify(resultado));
  console.log('Arquivo alterado');
};
// alteraSimpsons();
////

// Exercício 4.4
const criaArquivo = async () => {
  const personagens = await fs.readFile('./simpsons.json', 'utf-8');
  const arraySimpsons = JSON.parse(personagens);
  const resultado = arraySimpsons.filter(({ id }) => id === '1' || id === '4');

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(resultado));
  console.log('Arquivo criado');
};
// criaArquivo();
////

// Exercício 4.5
const adicionaPersonagem = async () => {
  const personagens = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const arraySimpsons = JSON.parse(personagens);
  arraySimpsons.push({ id: '11', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(arraySimpsons));
  console.log('Novo personagem adicionado');
};
// adicionaPersonagem();
////

// Exercício 4.6
const substituiPersonagem = async () => {
  const personagens = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const arraySimpsons = JSON.parse(personagens);
  console.log(arraySimpsons);
  const resultado = arraySimpsons.map(({ id, name }) => ({
    id,
    name: name.replace('Nelson Muntz', 'Maggie Simpson'),
  }));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(resultado));
  console.log('Personagem substituido');
};
// substituiPersonagem();
