import ILens from '../../interfaces/Lens';

const lensMock: ILens = {
  degree: 45,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 45,
  antiGlare: true,
  blueLightFilter: true,
};

const arrayLensMockWithId: ILens[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 45,
    antiGlare: true,
    blueLightFilter: true,
  },
  {
    _id: '62cf1fc6498565d94eba52ef',
    degree: 45,
    antiGlare: true,
    blueLightFilter: true,
  },
  {
    _id: '62cf1fc6498565d94eba52gh',
    degree: 45,
    antiGlare: true,
    blueLightFilter: true,
  },
  {
    _id: '62cf1fc6498565d94eba52ij',
    degree: 45,
    antiGlare: true,
    blueLightFilter: true,
  },
];

export { lensMock, lensMockWithId, arrayLensMockWithId };
