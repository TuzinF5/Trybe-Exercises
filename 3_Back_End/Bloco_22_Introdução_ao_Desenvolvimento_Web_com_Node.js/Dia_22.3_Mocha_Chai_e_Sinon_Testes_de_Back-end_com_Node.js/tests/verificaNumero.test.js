const { expect } = require('chai');

const verificaNumero = require('../verificaNumero');

describe('Verifica o retorno da função', () => {
  describe('quando o número passado for maior que 0', () => {
    it('o retorno é do tipo "string"', () => {
      const resultado = verificaNumero(4);

      expect(resultado).to.be.a('string');
    });

    it('deverá retornar "positivo"', () => {
      const resultado = verificaNumero(4);

      expect(resultado).to.be.equals('positivo');
    });
  });

  describe('quando o número passado for menor que 0', () => {
    it('o retorno é do tipo "string"', () => {
      const resultado = verificaNumero(-4);

      expect(resultado).to.be.a('string');
    });

    it('deverá retornar "negativo"', () => {
      const resultado = verificaNumero(-4);

      expect(resultado).to.be.equals('negativo');
    });
  });

  describe('quando o número passado for igual a 0', () => {
    it('o retorno é do tipo "string"', () => {
      const resultado = verificaNumero(0);

      expect(resultado).to.be.a('string');
    });

    it('deverá retornar "neutro"', () => {
      const resultado = verificaNumero(0);

      expect(resultado).to.be.equals('neutro');
    });
  });
});
