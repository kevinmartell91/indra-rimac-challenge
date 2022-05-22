import { BodySuccess } from "./interfaces/BodySuccess";
import { ResponseCreator } from "./ReponseCreator";

const body: BodySuccess = { message: "mensaje", data: {} };

test("Crea un objeto tipo respuesta", () => {
  const res = ResponseCreator.CreateResponse(200, body);
  expect(typeof res).toBe("object");
});

test("Objeto tipo respuesta contiene propiedades correctas", () => {
  const res = ResponseCreator.CreateResponse(200, body);
  expect(typeof res.statusCode).toBe("number");
  expect(typeof res.body).toBe("string");
});
