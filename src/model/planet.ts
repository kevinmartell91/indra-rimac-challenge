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
// export interface PlanetEN {
//   id: string;
//   name: string;
//   rotation_period: string;
//   orbital_period: string;
//   diameter: string;
//   climate: string;
//   gravity: string;
//   terrain: string;
//   surface_water: string;
//   population: string;
//   residents: string[];
//   films: string[];
//   created: string;
//   edited: string;
//   url: string;
// }
