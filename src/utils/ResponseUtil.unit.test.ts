import { BodySuccess } from "./interfaces/BodySuccess";
import { BodyError } from "./interfaces/BodyError";
import { ResponseUtil } from "./ResponseUtil";

const body: BodySuccess | BodyError = { message: "mensaje", data: {} };
describe("Crea un objeto respuesta ", () => {
  test("con statusCode 204", () => {
    const res = ResponseUtil.successfulResponseNoContent(body);
    expect(typeof res.statusCode).toBe("number");
    expect(res.statusCode).toBe(204);
    expect(typeof res.body).toBe("string");
  });

  test("con statusCode 201", () => {
    const res = ResponseUtil.successfulResponseCreated(body);
    expect(typeof res.statusCode).toBe("number");
    expect(res.statusCode).toBe(201);
    expect(typeof res.body).toBe("string");
  });

  test("con statusCode 200", () => {
    const res = ResponseUtil.successfulResponseOk(body);
    expect(typeof res.statusCode).toBe("number");
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe("string");
  });

  test("con statusCode 500", () => {
    const res = ResponseUtil.serverErrorBadRequest(body);
    expect(typeof res.statusCode).toBe("number");
    expect(res.statusCode).toBe(500);
    expect(typeof res.body).toBe("string");
  });

  test("con statusCode 400", () => {
    const res = ResponseUtil.clientErrorBadRequest(body);
    expect(typeof res.statusCode).toBe("number");
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe("string");
  });
});
