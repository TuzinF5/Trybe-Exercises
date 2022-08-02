class PessoaCliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }
}

class ItemPedido {
  private _nomeItem: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nomeItem = nome;
    this._preco = preco;
  }

  get nomeItem(): string {
    return this._nomeItem;
  }

  get preco(): number {
    return this._preco;
  }
}

class Pedido {
  private _cliente: PessoaCliente;
  private _itensConsumidos: ItemPedido[] = [];
  private _pagamento: string;
  private _desconto: number = 0;

  constructor(
    cliente: PessoaCliente,
    itensConsumidos: ItemPedido[],
    pagamento: string,
    desconto: number
  ) {
    this._cliente = cliente;
    this._itensConsumidos = itensConsumidos;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): PessoaCliente {
    return this._cliente;
  }
  get itensConsumidos(): ItemPedido[] {
    return this._itensConsumidos;
  }
  get pagamento(): string {
    return this._pagamento;
  }
  get desconto(): number {
    return this._desconto;
  }
}

const cliente = new PessoaCliente('Arthur');
const item = new ItemPedido('Batata Frita', 2);
const pedido = new Pedido(cliente, [item], 'Cartão', 0);

console.log(pedido);
