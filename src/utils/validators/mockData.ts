import { surfaceWater } from "../enums/surfaceWater";

export class MockDataPlanet {
  getMockData = () => {
    return {
      id: "ghruiwhg5784hwgfu58o4whgr",
      nombre: "Tatooine",
      periodo_rotacion: 23,
      periodo_orbital: 304,
      diametro: 65465,
      clima: "arid",
      gravedad: "1 standard",
      terreno: "desert",
      surperficie_agua: surfaceWater.one,
      poblacion: 2000,
      residentes: ["https://swapi.py4e.com/api/films/3/"],
      peliculas: [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/4/",
        "https://swapi.py4e.com/api/films/6/",
      ],
      creado: new Date("2014-12-09T13:50:49.641000Z"),
      editado: new Date("2014-12-20T20:58:18.411000Z"),
      url: "https://swapi.py4e.com/api/films/1/",
    };
  };
}
