export enum Color{
  rojo    ='Rojo',
  negro   ='Negro',
  azul    ='Azul',
  verde   ='Verde'
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
