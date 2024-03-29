// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import {
  arrayFrameMockWithId,
  frameMock,
  frameMockWithId,
} from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(arrayFrameMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('Buscando todos os frame', () => {
    it('Trás todos os frames com sucesso', async () => {
      const result = await frameModel.read();

      expect(result).to.be.deep.equal(arrayFrameMockWithId);
    });
  });

  describe('Deleta um frame pelo id', () => {
    it('Deleta com sucesso com id valido', async () => {
      const result = await frameModel.destroy('62cf1fc6498565d94eba52cd');

      expect(result).to.be.deep.equal(frameMockWithId);
    });

    it('Com o id inexistente responde com o "InvalidMongoId"', async () => {
      try {
        await frameModel.destroy('iderrado');
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  });
});
