const math = require('./math.js');

jest.mock('./math');

test('Faça o mock da funcão subtrair e teste sua chamada', () => {
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled()
});

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno', () => {
  math.multiplicar.mockReturnValue(10);
  math.multiplicar();

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar(5, 2)).toBe(10);
  expect(math.multiplicar(4444, 5555)).toBe(10);
});

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados', () => {
  const mockSomar = math.somar.mockImplementation((a, b) => a + b);

  mockSomar(3, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar(2, 2)).toBe(4);
  expect(mockSomar).toHaveBeenCalledWith(3, 3);
});

test('', () => {

});