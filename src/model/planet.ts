export interface Planet {
  id: string;
  externalId?: string;
  externalUrl: string;
  nombre: string;
  periodo_rotacion: number;
  periodo_orbital: number;
  diametro: number;
  clima: string;
  gravedad: string;
  terreno: string;
  surperficie_agua: number;
  poblacion: number;
  residentes: string[];
  peliculas: string[];
  creado: Date;
  editado: Date;
  url: string;
}
