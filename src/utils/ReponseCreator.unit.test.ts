import { BodySuccess } from "./interfaces/BodySuccess";
import { ResponseCreator } from "./ReponseCreator";

const body: BodySuccess = { message: "mensaje", data: {} };

describe("Objeto tipo respuesta", () => {
  test("creado correctamente", () => {
    const res = ResponseCreator.CreateResponse(200, body);
    expect(typeof res).toBe("object");
  });

  test("contiene propiedades de tipo correcto", () => {
    const res = ResponseCreator.CreateResponse(200, body);
    expect(typeof res.statusCode).toBe("number");
    expect(typeof res.body).toBe("string");
  });
});
