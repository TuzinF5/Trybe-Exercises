const { encode, decode } = require('../funcoesEncodeDecode');

describe('Para as funções encode e decode crie os seguintes testes:', () => {
  it('Teste se encode é função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Teste se decode é função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('wqdbfjt')).toBe('wqdbfjt');
    expect(decode('67890')).toBe('67890');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Arthur e brabo')).toHaveLength(14);
  });
});
