export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length >= 3) {
      this._name = name;
    } else {
      throw new Error('O nome deve ter no mínimo três caracteres!');
    }
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(birthDate: Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime())
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    if (this.getAge(birthDate) > 120)
      throw new Error('A pessoa não pode possuir mais de 120 anos');
  }
}
