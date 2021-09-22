const myRemoveWithoutCopy = require('../funcoes/funcaoMyRemoveWithoutCopy.js');

describe('A função myRemoveWithoutCopy(arr, item) recebe um array e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Verificar se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verificar se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContainEqual([1, 2, 3, 4]);
  });
  it('Fazer uma chamada para a função myRemoveWithoutCopy e verificar se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 4)).toHaveLength(3);
  });
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
