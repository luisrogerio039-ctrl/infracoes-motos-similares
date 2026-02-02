
export enum Gravidade {
  GRAVISSIMO = 'gravissimo',
  GRAVE = 'grave',
  MEDIA = 'media',
  LEVE = 'leve'
}

export interface Infracao {
  descricao: string;
  codigo: string;
  artigo: string;
  tipificacao: string;
  medida: string;
  gravidade: Gravidade;
  observacoes: string;
}
