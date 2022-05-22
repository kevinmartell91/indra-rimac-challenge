import { Body } from "./interfaces/Body";
import { clientErrorStatusCode } from "./enums/clientErrorStatusCode";
import { ResponseCreator } from "./ReponseCreator";
import { serverErrorStatusCode } from "./enums/serverErrorStatusCode";
import { succesfulStatusCode } from "./enums/successfulStatusCode";
import { Response } from "./interfaces/Response";
import { BodySuccess } from "./interfaces/BodySuccess";
import { BodyError } from "./interfaces/BodyError";
import { ResponseUtil } from "./ResponseUtil";

const body: BodySuccess | BodyError = { message: "mensaje", data: {} };

test("Crea una respuesta con statusCode 204", () => {
  const res = ResponseUtil.successfulResponseNoContent(body);
  expect(typeof res.statusCode).toBe("number");
  expect(res.statusCode).toBe(204);
  expect(typeof res.body).toBe("string");
});

test("Crea una respuesta con statusCode 201", () => {
  const res = ResponseUtil.successfulResponseCreated(body);
  expect(typeof res.statusCode).toBe("number");
  expect(res.statusCode).toBe(201);
  expect(typeof res.body).toBe("string");
});

test("Crea una respuesta con statusCode 200", () => {
  const res = ResponseUtil.successfulResponseOk(body);
  expect(typeof res.statusCode).toBe("number");
  expect(res.statusCode).toBe(200);
  expect(typeof res.body).toBe("string");
});

test("Crea una respuesta con statusCode 500", () => {
  const res = ResponseUtil.serverErrorBadRequest(body);
  expect(typeof res.statusCode).toBe("number");
  expect(res.statusCode).toBe(500);
  expect(typeof res.body).toBe("string");
});

test("Crea una respuesta con statusCode 400", () => {
  const res = ResponseUtil.clientErrorBadRequest(body);
  expect(typeof res.statusCode).toBe("number");
  expect(res.statusCode).toBe(400);
  expect(typeof res.body).toBe("string");
});
