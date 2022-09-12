import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Lens from '../../../models/Lens';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens', () => {
  const lensModel = new Lens();

  before(() => {
    Sinon.stub(Model, 'create').resolves(lensMockWithId);
  });

  after(() => {
    Sinon.restore();
  });

  describe('Criando uma lente', () => {
    it('Cria com sucesso', async () => {
      const result = await lensModel.create(lensMock);

      expect(result).to.be.equal(lensMockWithId);
    });
  });
});
