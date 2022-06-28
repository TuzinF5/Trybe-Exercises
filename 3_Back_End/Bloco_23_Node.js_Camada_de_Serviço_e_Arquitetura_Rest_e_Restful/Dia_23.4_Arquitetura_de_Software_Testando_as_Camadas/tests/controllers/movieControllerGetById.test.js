const { expect } = require('chai');
const sinon = require('sinon');

const movieService = require('../../services/movieService');
const movieController = require('../../controllers/movieController');

describe('Busca um filme pelo "ID"', () => {
  describe('Quando é encontrado um filme com o "ID" passado pela pessoa usuária', () => {
    const id = 1;

    const payloadMovie = {
      id,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    const request = {};
    const response = {};

    before(() => {
      request.params = { id: 1};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'getById').resolves(payloadMovie);
    });

    after(() => {
      movieService.getById.restore();
    });

    it('deverá retornar um objeto com todas as propriedades do filme', async () => {
      await movieController.getById(request, response);

      expect(response.json.calledWith(payloadMovie)).to.be.equal(true);
    });

    it('deverá retornar o código http 200 - OK no status da response', async () => {
      await movieController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Quando não é encontrado nenhum filme com o "ID" passado pela pessoa usuária', () => {
    const request = {};
    const response = {};

    before(() => {
      request.params = { id: 2};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'getById').resolves(false);
    });

    after(() => {
      movieService.getById.restore();
    });

    it('deverá retornar um objeto no formato  { message: "Filme não encontrado." }', async () => {
      await movieController.getById(request, response);

      expect(response.json.calledWith({ message: 'Filme não encontrado.' })).to.be.equal(true);
    });

    it('deverá retornar o código http 404 - Not Found no status da response', async () => {
      await movieController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  });
});
