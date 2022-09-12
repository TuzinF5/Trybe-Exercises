import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Lens from '../../../models/Lens';
import { frameMockWithId } from '../../mocks/frameMock';
import {
  arrayLensMockWithId,
  lensMock,
  lensMockWithId,
} from '../../mocks/lensMock';

describe('Lens', () => {
  const lensModel = new Lens();

  before(() => {
    Sinon.stub(Model, 'create').resolves(lensMockWithId);
    Sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    Sinon.stub(Model, 'find').resolves(arrayLensMockWithId);
    Sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  });

  after(() => {
    Sinon.restore();
  });

  describe('Criando uma lente', () => {
    it('Cria com sucesso', async () => {
      const result = await lensModel.create(lensMock);

      expect(result).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('Buscando uma lente pelo id', () => {
    it('Com o id existente responde com o objeto certo', async () => {
      const result = await lensModel.readOne('62cf1fc6498565d94eba52cd');

      expect(result).to.be.deep.equal(lensMockWithId);
    });

    it('Com o id inexistente responde com o "InvalidMongoId"', async () => {
      try {
        await lensModel.readOne('iderrado');
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  });

  describe('Buscando todas as lens', () => {
    it('Trás todas as lens com sucesso', async () => {
      const result = await lensModel.read();

      expect(result).to.be.deep.equal(arrayLensMockWithId);
    });
  });

  describe('Deleta uma lens pelo id', () => {
    it('Deleta com sucesso com id valido', async () => {
      const result = await lensModel.destroy('62cf1fc6498565d94eba52cd');

      expect(result).to.be.deep.equal(lensMockWithId);
    });

    it('Com o id inexistente responde com o "InvalidMongoId"', async () => {
      try {
        await lensModel.destroy('iderrado');
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  });
});
