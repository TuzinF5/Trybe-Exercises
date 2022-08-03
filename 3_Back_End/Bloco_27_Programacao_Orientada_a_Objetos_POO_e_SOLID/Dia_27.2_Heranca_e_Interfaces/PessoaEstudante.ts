import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date,
    examsGrades: number[],
    worksGrades: number[]
  ) {
    super(name, birthDate);
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
    this._enrollment = this.generateEnrollment();
  }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) {
      throw new Error(
        'A pessoa estudante deve possuir no máximo 4 notas de provas'
      );
    }
    this._examsGrades = grades;
  }

  set worksGrades(grades: number[]) {
    if (grades.length > 2) {
      throw new Error(
        'A pessoa estudante deve possuir no máximo 2 notas de trabalhos'
      );
    }
    this._worksGrades = grades;
  }

  public sumGrades(): number {
    const grades = [...this._examsGrades, ...this._worksGrades];
    const result = grades.reduce((prev, current) => prev + current, 0);
    return result as number;
  }

  public sumAverageGrade(): number {
    const grades = [...this._examsGrades, ...this._worksGrades];
    const result =
      grades.reduce((prev, current) => prev + current, 0) / grades.length;
    return result;
  }

  public generateEnrollment(): string {
    const numbers = `${new Date().getTime()}${Math.floor(Math.random() * 11)}`;

    return `STUD${numbers}`;
  }
}

const pessoa = new Student('jon', new Date('1997/11/20'), [2, 2, 5, 5], [4]);
console.log(pessoa);
