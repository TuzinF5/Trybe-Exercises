let service = require('./service');

describe('Testando a função randomNumber.', () => {
  it('Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber();

    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });

  it('Testando se a função foi chamada, a nova implementação de divisão foi aplicada e se implementação acontece apenas uma vez.', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(10, 5)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber(10, 5)).not.toBe(2);

    //   expect(randomNumber(10, 2)).toBe(5);
    // expect(randomNumber).toHaveBeenCalled();
    // expect(randomNumber).toHaveBeenCalledTimes(1);
    // expect(randomNumber).toHaveBeenCalledWith(10, 2);
  });

  it('Testando se a nova implementação foi aplicada, e se a função foi chamada.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);

    service.randomNumber = jest
      .fn()
      .mockReset()
      .mockImplementation((a) => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });
});

describe('Testando a implementação de mocks nas funções.', () => {
  it('A função upperCase deve retornar uma string em caixa baixa.', () => {
    expect(service.upperCase('arthur')).toBe('ARTHUR');

    upperCase = jest
      .spyOn(service, 'upperCase')
      .mockImplementation((string) => string.toLowerCase());

    expect(upperCase('ARTHUR')).toBe('arthur');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledWith('ARTHUR');

    upperCase.mockRestore();
    expect(service.upperCase('arthur')).toBe('ARTHUR');
  });

  it('A função firstLetter deve retornar a última letra de uma string.', () => {
    expect(service.firstLetter('arthur')).toBe('a');

    service.firstLetter = jest
      .fn()
      .mockImplementation((string) => string.substr(-1, 1));

    expect(service.firstLetter('arthur')).toBe('r');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledWith('arthur');
  });

  it('A função joinStrings deve receber três strings e concatená-las.', () => {
    expect(service.joinStrings('arthur', 'suzi')).toBe('arthur suzi');

    service.joinStrings = jest
      .fn()
      .mockImplementation(
        (firstString, secondString, thirdString) =>
          `${firstString} ${secondString} ${thirdString}`
      );

    expect(service.joinStrings('arthur', 'suzi', 'mae')).toBe(
      'arthur suzi mae'
    );
    expect(service.joinStrings).toHaveBeenCalled();
    expect(service.joinStrings).toHaveBeenCalledWith('arthur', 'suzi', 'mae');
  });
});

describe('Mockando a requisição e criando dois testes.', () => {
  afterEach(() => jest.clearAllMocks()); // A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.

  it('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".', () => {});
  const URL_API = 'https://dog.ceo/api/breeds/image/random';
  const ObjectApi = {
    message:
      'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_4619.jpg',
    status: 'success',
  };

  // global.fetch = (url) => { // não tenho controle para testar
  //   return Promise.resolve({
  //     json: () => Promise.resolve(URL_API),
  //   });
  // };

  // global.fetch = jest.fn().mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(URL_API),
  // });

  // global.fetch = jest.fn(async () => ({
  //   json: async () => URL_API,
  // }));

  // global.fetch = jest.fn().mockImplementation(async () => ({
  //   json: async () => ObjectApi,
  // }));

  service.apiRequest();
  expect(global.fetch).toHaveBeenCalled();

  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(ObjectApi),
  //   })
  // );

  // global.fetch(URL_API);
  // expect(global.fetch).toHaveBeenCalled();
  // expect(global.fetch).toHaveBeenCalledTimes(1);
  // expect(global.fetch).toHaveBeenCalledWith(URL_API);
});
