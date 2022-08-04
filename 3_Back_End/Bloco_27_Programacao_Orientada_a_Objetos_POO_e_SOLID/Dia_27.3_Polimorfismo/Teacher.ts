import Employee from "./Employee";

export default class Teacher extends Employee {
  registration: string = '';
  salary: number;
  admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    registration: string,
    salary: number,
    admissionDate: Date
  ) {
    super(name, birthDate, salary);
    this.setRegistration = registration;
    this.salary = salary;
    this.admissionDate = admissionDate;
  }

  generateRegistration(): string {
    const numbers = `${new Date().getTime()}${Math.floor(Math.random() * 11)}`;

    return `REG${numbers}`;
  }

  set setRegistration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
    } else {
      this.registration = value;
    }
  }

  set setsalary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo.');
    } else {
      this.salary = value;
    }
  }
}