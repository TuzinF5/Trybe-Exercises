const myRemove = require('../funcoes/funcaoMyRemove.js');

describe('A função myRemove(arr, item) recebe um array e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verificar se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verificar se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
  it('Verificar se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4], /*parametro vazio*/)).toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
