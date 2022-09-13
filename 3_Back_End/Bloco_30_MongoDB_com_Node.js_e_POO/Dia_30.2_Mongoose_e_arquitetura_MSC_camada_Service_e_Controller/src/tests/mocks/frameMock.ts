// ./src/tests/mocks/frameMock.ts

import IFrame from '../../interfaces/Frame';

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const arrayFrameMockWithId: IFrame[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6498565d94eba52ef',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6498565d94eba52gh',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
  {
    _id: '62cf1fc6498565d94eba52ij',
    material: 'Ouro',
    color: 'Daquele naipe',
  },
];

export { frameMock, frameMockWithId, arrayFrameMockWithId };