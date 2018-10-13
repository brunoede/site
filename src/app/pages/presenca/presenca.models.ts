export class Convidado {
  nome: string;
  confirmacao: boolean;

  constructor(data: any = {}) {
    this.nome = data.nome || undefined;
    this.confirmacao = data.confirmacao || undefined;
  }
}