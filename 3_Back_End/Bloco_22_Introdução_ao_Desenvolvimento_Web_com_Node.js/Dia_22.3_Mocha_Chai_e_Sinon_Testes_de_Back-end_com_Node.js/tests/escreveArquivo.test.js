const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escreveArquivo = require('../escreveArquivo');

const NOME_DO_ARQUIVO = 'arquivo.txt';
const CONTEUDO_DO_ARQUIVO = 'Aprendendo testes na trybe';

describe('Verifica se a função', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('quando escrever o conteúdo com sucesso no arquivo', () => {
    it('retorná uma "string"', () => {
      const resultado = escreveArquivo(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);

      expect(resultado).to.be.a('string');
    });

    it('retorná uma string com o valor "ok"', () => {
      const resultado = escreveArquivo(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);

      expect(resultado).to.be.equals('ok');
    });
  });
});
