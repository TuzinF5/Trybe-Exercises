const { findUserById, getUserName } = require('./getUserName');

describe('Sem usar ASYNC/AWAIT', () => {
  describe('Quando a função getUserName é chamada', () => {
    it('com id que seja de um usuário, ele é encontrado', () => (
      getUserName(1).then((name) => {
        expect(name).toBe('Mark');
      })
    ));
    it('com id que não seja de um usuário, retorna a mensagem indicando que o id nao foi encontrado', () => (
      getUserName(3).catch((erro) => {
        expect(erro).toEqual(new Error(`User with 3 not found.`));
      })
    ));
  });
});

describe('Usando ASYNC/AWAIT', () => {
  describe('Quando a função getUserName é chamada', () => {
    it('com id que seja de um usuário, ele é encontrado', async () => {
      const result = await getUserName(1);
      expect(result).toBe('Mark');
    });
    it('com id que não seja de um usuário, retorna a mensagem indicando que o id nao foi encontrado', async () => {
      expect.assertions(1);
      try {
        await getUserName(4);
      } catch (error) {
        expect(error).toEqual(new Error('User with 4 not found.'));
      }
    });
  });
});
