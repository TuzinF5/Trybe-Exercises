class PessoaEstudante {
  private _nome: string;
  private _matricula: string;
  private _notasProva: number[] = [0, 0, 0, 0];
  private _notasTrabalho: number[] = [0, 0];

  constructor(
    nome: string,
    matricula: string,
    notasProva: number[],
    notasTrabalho: number[]
  ) {
    this._nome = nome;
    this._matricula = matricula;
    this.notasProva = notasProva;
    this.notasTrabalho = notasTrabalho;
  }

  get nome(): string {
    return this._nome;
  }

  get matricula(): string {
    return this._matricula;
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(notas: number[]) {
    if (notas.length !== 4) {
      throw new Error('Obrigatório ter 4 notas de prova!');
    } else {
      this._notasProva = notas;
    }
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(notas: number[]) {
    if (notas.length !== 2) {
      throw new Error('Obrigatório ter 2 notas de trabalho!');
    } else {
      this._notasTrabalho = notas;
    }
  }

  public somaNotasProva(): number {
    const result = this._notasProva?.reduce((prev, current) => prev + current, 0);
    return result as number;
  }

  public mediaNotasProva(): number {
    const result = (this._notasProva?.reduce((prev, current) => prev + current, 0) / this._notasProva.length);
    return result as number;
  }

  public somaNotasTrabalho(): number {
    const result = this._notasTrabalho?.reduce((prev, current) => prev + current, 0);
    return result as number;
  }

  public mediaNotasTrabalho(): number {
    const result = (this._notasTrabalho?.reduce((prev, current) => prev + current, 0) / this._notasTrabalho.length);
    return result as number;
  }
}

const estudante = new PessoaEstudante('Arthur', 'Trybe', [2, 4, 6, 8], [3, 5]);

console.log(estudante);
