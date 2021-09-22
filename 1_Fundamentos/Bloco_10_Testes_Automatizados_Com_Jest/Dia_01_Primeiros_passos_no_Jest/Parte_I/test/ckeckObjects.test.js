const { obj1, obj2, obj3 } = require('../funcoes/checkObjects.js');

describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('comparando obj1 com obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('comparando obj2 com obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
  it('comparando obj3 com obj1', () => {
    expect(obj3).not.toEqual(obj1);
  });
});
