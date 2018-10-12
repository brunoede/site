import { DocumentChangeAction } from '@angular/fire/firestore';

export class Gift {
  cores: string;
  marcas: string;
  nome: string;
  quantidade: number;
  disponivel: number;
  givenBy: string[];

  constructor(data: any = {}) {
    this.cores = data.cores || null;
    this.marcas = data.marcas || null;
    this.nome = data.nome || null;
    this.quantidade = data.quantidade || 1;
    this.givenBy = data.givenBy || null;
    this.disponivel = this.quantidade - (this.givenBy ? this.givenBy.length : 0);
  }
}

export interface GiftStream {
  id: string;
  stream: DocumentChangeAction<any>;
  data: Gift;
}
