const fs = require('fs');

const escreveArquivo = (nomeArquivo, conteudo) => {
  try {
    fs.writeFileSync(nomeArquivo, conteudo);
    return 'ok';
  } catch (error) {
    return error.message;
  }
};

module.exports = escreveArquivo;
