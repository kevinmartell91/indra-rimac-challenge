import { surfaceWater } from "../utils/enums/surfaceWater";

export interface Planet {
  id: string;
  nombre: string;
  periodo_rotacion: number;
  periodo_orbital: number;
  diametro: number;
  clima: string;
  gravedad: string;
  terreno: string;
  surperficie_agua: surfaceWater;
  poblacion: number;
  residentes: string[];
  peliculas: string[];
  creado: Date;
  editado: Date;
  url: string;
}
