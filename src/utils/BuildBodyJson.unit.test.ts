import { BuildBodyJson } from "./BuildBodyJson";

test("Construye un string de un json", () => {
  const object: object = { param: "1" };
  const bodyJson = BuildBodyJson.bodyToString(object);
  expect(typeof bodyJson).toBe("string");
});
