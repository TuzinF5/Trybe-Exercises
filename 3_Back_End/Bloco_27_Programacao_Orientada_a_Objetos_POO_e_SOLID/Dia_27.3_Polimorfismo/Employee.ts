import IEnrollable from './Enrollable';
import Person from './Person';

export default class Employee extends Person implements IEnrollable {
  enrollment: string;
  salary: number;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this.salary = salary;
    this.enrollment = this.generateEnrollment();
  }

  public generateEnrollment(): string {
    const numbers = `${new Date().getTime()}${Math.floor(Math.random() * 11)}`;

    return `EMPL${numbers}`;
  }
}
