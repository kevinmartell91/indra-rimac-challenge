import { Planet } from "../../model/Planet";

export const mapToPlanet = (object: any): Planet => {
  return {
    ...object,
    periodo_rotacion: +object.periodo_rotacion,
    periodo_orbital: +object.periodo_orbital,
    diametro: +object.diametro,
    surperficie_agua: +object.surperficie_agua,
    poblacion: +object.poblacion,
    creado: new Date(object.creado),
    editado: new Date(object.editado),
  };
};
