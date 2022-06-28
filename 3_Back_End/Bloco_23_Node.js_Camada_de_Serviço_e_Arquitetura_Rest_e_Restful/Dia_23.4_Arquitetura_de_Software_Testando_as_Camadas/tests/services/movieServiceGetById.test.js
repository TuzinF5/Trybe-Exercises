const { expect } = require('chai');
const sinon = require('sinon');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('Busca um filme pelo "ID"', () => {
  describe('Quando é encontrado um filme com o "ID" passado pela pessoa usuária', () => {
    const id = 1;

    const payloadMovie = {
      id,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(movieModel, 'getById').resolves(payloadMovie);
    });

    after(() => {
      movieModel.getById.restore();
    });

    it('deverá retornar um objeto', async () => {
      const response = await movieService.getById(id);

      expect(response).to.be.a('object');
    });

    it('deverá retornar um objeto com todas as propriedades do filme', async () => {
      const response = await movieService.getById(id);

      expect(response).to.be.equal(payloadMovie);
    });
  });

  describe('Quando não é encontrado nenhum filme com o "ID" passado pela pessoa usuária', () => {
    const id = 2;

    const emptyObject = {};

    before(() => {
      sinon.stub(movieModel, 'getById').resolves(emptyObject);
    });

    after(() => {
      movieModel.getById.restore();
    });

    it('deverá retornar um objeto', async () => {
      const response = await movieService.getById(id);

      expect(response).to.be.a('object');
    });

    it('deverá retornar um objeto vazio', async () => {
      const response = await movieService.getById(id);

      expect(response).to.be.empty;
    });
  });
});
