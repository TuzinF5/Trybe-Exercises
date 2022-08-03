class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
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

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(birthDate: Date): Error | void {
    if (birthDate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if (this.getAge(birthDate) > 120) throw new Error('A pessoa não pode possuir mais de 120 anos');
  }
}

export default Person;

const person1 = new Person('jon', new Date('1980/01/25'));
const person2 = new Person('doe', new Date('1902/07/02'));
console.log(person1);
console.log(person2);

// const data = new Date('1980/01/25');
// console.log(data.getTime());
// console.log(data.toLocaleDateString());
// console.log(data.toLocaleTimeString());
