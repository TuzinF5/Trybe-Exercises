const uppercase = require('./uppercase');

describe('Chamada a função uppercase', () => {
  it('transforma as letras de uma palavra em letras maiúsculas', (done) => {
    uppercase('arthur é foda', (result) => {
      try {
        expect(result).toBe('ARTHUR É FODA');
        done();
      }
      catch (error) {
        done(error);
      }
    });
  });
});
