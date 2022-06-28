const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

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
      // sinon.stub(connection, 'execute').resolves([{ title: 'Example Movie', directed_by: 'Jane Dow', release_year: 1999 }])
    });

    after(() => {
      movieModel.getById.restore();
      // connection.execute.restore();
    });

    it('deverá retornar um objeto', async () => {
      const response = await movieModel.getById(id);

      expect(response).to.be.a('object');
    });

    it('deverá retornar um objeto com todas as propriedades do filme', async () => {
      const response = await movieModel.getById(id);

      expect(response).to.be.equal(payloadMovie);
    });
  });

  describe('Quando não é encontrado nenhum filme com o "ID" passado pela pessoa usuária', () => {
    const id = 2;

    // const emptyObject = {};

    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
      // sinon.stub(movieModel, 'getById').resolves(emptyObject);
    });

    after(() => {
      connection.execute.restore();
      // movieModel.getById.restore();
    });

    it('deverá retornar um objeto', async () => {
      const response = await movieModel.getById(id);

      expect(response).to.be.a('object');
    });

    it('deverá retornar um objeto vazio', async () => {
      const response = await movieModel.getById(id);

      // expect(response).to.be.equal(emptyObject);
      expect(response).to.be.empty;
    });
  });
});
