import { surfaceWater } from "../enums/surfaceWater";
import { MockDataPlanet } from "./mockData";
import { PlanetValidator } from "./PlanetValidator";

const validator = new PlanetValidator();

describe("Valida que la propiedad 'nombre'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.nombre = null;
    const res = validator.validate(mockData);
    expect(res.nombre).toBe("El valor no puede ser null");
  });

  test("no sea vacia", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.nombre = "";
    const res = validator.validate(mockData);
    expect(res.nombre).toBe("El valor no puede estar vacio");
  });
});
describe("Valida que la propiedad 'clima'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.clima = null;
    const res = validator.validate(mockData);
    expect(res.clima).toBe("El valor no puede ser null");
  });

  test("no sea vacia", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.clima = "";
    const res = validator.validate(mockData);
    expect(res.clima).toBe("El valor no puede estar vacio");
  });
});
describe("Valida que la propiedad 'gravedad'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.gravedad = null;
    const res = validator.validate(mockData);
    expect(res.gravedad).toBe("El valor no puede ser null");
  });

  test("no sea vacia", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.gravedad = "";
    const res = validator.validate(mockData);
    expect(res.gravedad).toBe("El valor no puede estar vacio");
  });
});

describe("Valida que la propiedad 'terreno'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.terreno = null;
    const res = validator.validate(mockData);
    expect(res.terreno).toBe("El valor no puede ser null");
  });

  test("no sea vacia", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.terreno = "";
    const res = validator.validate(mockData);
    expect(res.terreno).toBe("El valor no puede estar vacio");
  });
});

describe("Valida que la propiedad 'periodo_rotacion'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.periodo_rotacion = null;
    const res = validator.validate(mockData);
    expect(res.periodo_rotacion).toBe("El valor no puede ser null");
  });
  test("no sea menor a cero", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.periodo_rotacion = -45;
    const res = validator.validate(mockData);
    expect(res.periodo_rotacion).toBe("El valor no puede ser menor a 0");
  });
});
describe("Valida que la propiedad 'periodo_orbital'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.periodo_orbital = null;
    const res = validator.validate(mockData);
    expect(res.periodo_orbital).toBe("El valor no puede ser null");
  });
  test("no sea menor a cero", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.periodo_orbital = -45;
    const res = validator.validate(mockData);
    expect(res.periodo_orbital).toBe("El valor no puede ser menor a 0");
  });
});
describe("Valida que la propiedad 'diametro'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.diametro = null;
    const res = validator.validate(mockData);
    expect(res.diametro).toBe("El valor no puede ser null");
  });
  test("no sea menor a cero", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.diametro = -45;
    const res = validator.validate(mockData);
    expect(res.diametro).toBe("El valor no puede ser menor a 0");
  });
});
describe("Valida que la propiedad 'surperficie_agua'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.surperficie_agua = null;
    const res = validator.validate(mockData);
    expect(res.surperficie_agua).toBe("El valor no puede ser null");
  });
  test("reciba una de las opciones pemitidas ", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.surperficie_agua = surfaceWater.one;
    const res = validator.validate(mockData);
    expect(res).toStrictEqual({});
  });
});
describe("Valida que la propiedad 'poblacion'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.poblacion = null;
    const res = validator.validate(mockData);
    expect(res.poblacion).toBe("El valor no puede ser null");
  });
  test("sea menor a cero", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.poblacion = -15;
    const res = validator.validate(mockData);
    expect(res.poblacion).toBe("El valor no puede ser menor a 0");
  });
});

describe("Valida que la propiedad 'residentes'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.residentes = null;
    const res = validator.validate(mockData);
    expect(res.residentes).toBe("El valor no puede ser un array null");
  });
  test("solo contenga elementos de tipo string", () => {
    const mockData = new MockDataPlanet().getMockData();
    const res = validator.validate(mockData);
    expect(res).toStrictEqual({});
  });
  test("no contiene elementos vacios en el array", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.residentes = ["   ", "https://swapi.py4e.com/api/films/3/"];
    const res = validator.validate(mockData);
    expect(res.residentes).toBe("Uno o más elementos del array estan vacios");
  });
  test("no contiene url invalidas en el array", () => {
    const mockData = new MockDataPlanet().getMockData();
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
});
describe("Valida que la propiedad 'peliculas'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.peliculas = null;
    const res = validator.validate(mockData);
    expect(res.peliculas).toBe("El valor no puede ser un array null");
  });
  test("solo contenga elementos de tipo string", () => {
    const mockData = new MockDataPlanet().getMockData();
    const res = validator.validate(mockData);
    expect(res).toStrictEqual({});
  });
  test("no contiene elementos vacios en el array", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.peliculas = ["   ", "https://swapi.py4e.com/api/films/3/"];
    const res = validator.validate(mockData);
    expect(res.peliculas).toBe("Uno o más elementos del array estan vacios");
  });
  test("no contiene url invalidas en el array", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.peliculas = [
      " agfa899899",
      "ghfjh@4&7",
      "https://swapi.py4e.com/api/films/3/",
    ];
    const res = validator.validate(mockData);
    expect(res.peliculas).toBe(
      "Uno o más elementos del array peliculas no esta en el formato URL correcto"
    );
  });
});
describe("Valida que la propiedad 'url'", () => {
  test("no sea null", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.url = null;
    const res = validator.validate(mockData);
    expect(res.url).toBe("El valor no puede ser null");
  });
  test("no este vacio", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.url = "   ";
    const res = validator.validate(mockData);
    expect(res.url).toBe("El valor no puede estar vacio");
  });
  test("no sea una url invalida", () => {
    const mockData = new MockDataPlanet().getMockData();
    mockData.url = "i.py4e.com/a65lms/3/";
    const res = validator.validate(mockData);
    expect(res.url).toBe("El valor no tiene el formato URL correcto");
  });
});
