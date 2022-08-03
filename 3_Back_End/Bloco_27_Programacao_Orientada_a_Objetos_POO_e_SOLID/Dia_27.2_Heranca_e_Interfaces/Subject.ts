class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length >= 3) {
      this._name = name;
    } else {
      throw new Error('O nome deve ter no mínimo três caracteres!');
    }
  }
}
