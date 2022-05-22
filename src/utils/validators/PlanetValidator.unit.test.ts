import { surfaceWater } from "../enums/surfaceWater";
import { PlanetValidator } from "./PlanetValidator";

const mockData = {
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

const validator = new PlanetValidator();

test("Valida que la propiedad 'nombre' no sea null", () => {
  mockData.nombre = null;
  const res = validator.validate(mockData);
  expect(res.nombre).toBe("El valor no puede ser null");
});

test("Valida que la propiedad 'nombre' no sea vacia", () => {
  mockData.nombre = "";
  const res = validator.validate(mockData);
  expect(res.nombre).toBe("El valor no puede estar vacio");
});

test("Valida que la propiedad 'clima' no sea null", () => {
  mockData.clima = null;
  const res = validator.validate(mockData);
  expect(res.clima).toBe("El valor no puede ser null");
});

test("Valida que la propiedad 'clima' no sea vacia", () => {
  mockData.clima = "";
  const res = validator.validate(mockData);
  expect(res.clima).toBe("El valor no puede estar vacio");
});

test("Valida que la propiedad 'gravedad' no sea null", () => {
  mockData.gravedad = null;
  const res = validator.validate(mockData);
  expect(res.gravedad).toBe("El valor no puede ser null");
});

test("Valida que la propiedad 'gravedad' no sea vacia", () => {
  mockData.gravedad = "";
  const res = validator.validate(mockData);
  expect(res.gravedad).toBe("El valor no puede estar vacio");
});

test("Valida que la propiedad 'terreno' no sea null", () => {
  mockData.terreno = null;
  const res = validator.validate(mockData);
  expect(res.terreno).toBe("El valor no puede ser null");
});

test("Valida que la propiedad 'terreno' no sea vacia", () => {
  mockData.terreno = "";
  const res = validator.validate(mockData);
  expect(res.terreno).toBe("El valor no puede estar vacio");
});

test("Valida que la propiedad 'periodo_rotacion' no sea null", () => {
  mockData.periodo_rotacion = null;
  const res = validator.validate(mockData);
  expect(res.periodo_rotacion).toBe("El valor no puede ser null");
});
test("Valida que la propiedad 'periodo_rotacion' no sea menor a cero", () => {
  mockData.periodo_rotacion = -45;
  const res = validator.validate(mockData);
  expect(res.periodo_rotacion).toBe("El valor no puede ser menor a 0");
});
test("Valida que la propiedad 'periodo_orbital' no sea null", () => {
  mockData.periodo_orbital = null;
  const res = validator.validate(mockData);
  expect(res.periodo_orbital).toBe("El valor no puede ser null");
});
test("Valida que la propiedad 'periodo_orbital' no sea menor a cero", () => {
  mockData.periodo_orbital = -45;
  const res = validator.validate(mockData);
  expect(res.periodo_orbital).toBe("El valor no puede ser menor a 0");
});
test("Valida que la propiedad 'diametro' no sea null", () => {
  mockData.diametro = null;
  const res = validator.validate(mockData);
  expect(res.diametro).toBe("El valor no puede ser null");
});
test("Valida que la propiedad 'diametro' no sea menor a cero", () => {
  mockData.diametro = -45;
  const res = validator.validate(mockData);
  expect(res.diametro).toBe("El valor no puede ser menor a 0");
});
test("Valida que la propiedad 'surperficie_agua' no sea null", () => {
  mockData.surperficie_agua = null;
  const res = validator.validate(mockData);
  expect(res.surperficie_agua).toBe("El valor no puede ser null");
});
test("Valida que la propiedad 'surperficie_agua' reciba una de las opciones pemitidas ", () => {
  mockData.surperficie_agua = surfaceWater.one;
  const res = validator.validate(mockData);
  expect(res).toBe("");
});
test("Valida que la propiedad 'poblacion' no sea null", () => {
  mockData.poblacion = null;
  const res = validator.validate(mockData);
  expect(res.poblacion).toBe("El valor no puede ser null");
});
test("Valida que la propiedad 'poblacion' sea menor a cero", () => {
  mockData.poblacion = -15;
  const res = validator.validate(mockData);
  expect(res.poblacion).toBe("El valor no puede ser menor a 0");
});

test("Valida que la propiedad 'residentes' no sea null", () => {
  mockData.residentes = null;
  const res = validator.validate(mockData);
  expect(res.residentes).toBe("El valor no puede ser un array null");
});
test("Valida que la propidadad 'residentes' contenga elementos de tipo string", () => {
  const res = validator.validate(mockData);
  expect(res).toBe("");
});
test("Valida que la propidadad 'residentes' no contiene uno o más elementos vacios", () => {
  mockData.residentes = ["   ", "https://swapi.py4e.com/api/films/3/"];
  const res = validator.validate(mockData);
  expect(res).toBe("Uno o más elementos del array estan vacios");
});
test("Validad que la propiedad 'residentes' contien uno o más url invalidas", () => {
  mockData.residentes = [
    "agfa899899",
    "ghfjh@4&7",
    "https://swapi.py4e.com/api/films/3/",
  ];
  const res = validator.validate(mockData);
  expect(res.residentes).toBe(
    "Uno o más elementos del array residentes no esta en el formato URL correcto"
  );
});
test("Valida que la propiedad 'peliculas' no sea null", () => {
  mockData.peliculas = null;
  const res = validator.validate(mockData);
  expect(res.peliculas).toBe("El valor no puede ser un array null");
});
test("Valida que la propidadad 'peliculas' contenga elementos de tipo string", () => {
  const res = validator.validate(mockData);
  expect(res).toBe("");
});
test("Valida que la propidadad 'peliculas' no contiene uno o más elementos vacios", () => {
  mockData.peliculas = ["   ", "https://swapi.py4e.com/api/films/3/"];
  const res = validator.validate(mockData);
  expect(res).toBe("Uno o más elementos del array estan vacios");
});
test("Validad que la propiedad 'peliculas' contien uno o más url invalidas", () => {
  mockData.peliculas = [
    " agfa899899",
    "ghfjh@4&7",
    "https://swapi.py4e.com/api/films/3/",
  ];
  const res = validator.validate(mockData);
  expect(res.peliculas).toBe(
    "Uno o más elementos del array residentes no esta en el formato URL correcto"
  );
});
test("Valida que la propiedad 'url' no sea null", () => {
  mockData.url = null;
  const res = validator.validate(mockData);
  expect(res.url).toBe("El valor no puede ser null");
});
test("Valida que la propidadad 'url' no este vacio", () => {
  mockData.url = "   ";
  const res = validator.validate(mockData);
  expect(res.url).toBe("El valor no puede estar vacio");
});
test("Validad que la propiedad 'url' contiene una url invalida", () => {
  mockData.url = "i.py4e.com/a65lms/3/";
  const res = validator.validate(mockData);
  expect(res.peliculas).toBe("El valor no tiene el formato URL correcto");
});
