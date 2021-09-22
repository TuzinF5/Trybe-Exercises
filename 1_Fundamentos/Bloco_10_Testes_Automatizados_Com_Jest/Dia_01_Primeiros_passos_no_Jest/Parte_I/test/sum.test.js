const sum = require('../funcoes/funcaoSum.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Testar se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Testar se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('Testar se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrow();
  })
  it('Testar se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});
