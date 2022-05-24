import { Planet } from "../../../model/Planet";

export const mapJsonToSpanishPropertiesObject = (json: object): Planet => {
  if (json === undefined) return null;
  const planet: any = {};
  for (const key in json) {
    switch (key) {
      case "name":
        planet.nombre = json[key];
        break;
      case "rotation_period":
        planet.periodo_rotacion = json[key];
        break;
      case "orbital_period":
        planet.periodo_orbital = json[key];
        break;
      case "diameter":
        planet.diametro = json[key];
        break;
      case "climate":
        planet.clima = json[key];
        break;
      case "gravity":
        planet.gravedad = json[key];
        break;
      case "terrain":
        planet.terreno = json[key];
        break;
      case "surface_water":
        planet.surperficie_agua = json[key];
        break;
      case "population":
        planet.poblacion = json[key];
        break;
      case "residents":
        planet.residentes = json[key];
        break;
      case "films":
        planet.peliculas = json[key];
        break;
      case "created":
        planet.creado = json[key];
        break;
      case "edited":
        planet.editado = json[key];
        break;
      case "url":
        planet.url = json[key];
    }
  }
  return planet as Planet;
};
