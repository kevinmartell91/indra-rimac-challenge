import { CreatePlanetController } from "./createPlanetController";
import { eventMockTemplate } from "../utils/test/EventGenerator";
import { DynamoDBConnection } from "../model/DynamoDBConnection";
import * as mockData from "../utils/test/mockData";
const ddb = new DynamoDBConnection();
const createController: CreatePlanetController = new CreatePlanetController(
  ddb
);
const context: any = {};
const mockEvent: any = eventMockTemplate;

// const mockData = new MockDataPlanet();
describe("Valid que el createController", () => {
  test("sea una function", async () => {
    expect(typeof createController.create).toBe("function");
  });
  test("reciba el body y retorne un objeto Response como respuesta", async () => {
    const context: any = {};
    mockEvent.body = JSON.stringify({
      name: "test",
      description: "one two three",
    });
    const res = await createController.create(mockEvent, context);
    expect(res).toBeDefined();
    expect(typeof res).toBe("object");
  });
  test("retorne un statusCode 200 si el planeta fue creado con exito", async () => {
    mockEvent.body = JSON.stringify(mockData.getMockCorrectParams);
    const res = await createController.create(mockEvent, context);
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(200);
  });
  test("retorne un statusCode 500 si el planeta fue creado con exito", async () => {
    mockEvent.body = JSON.stringify(mockData.getMockData);
    const res = await createController.create(mockEvent, context);
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(500);
  });
  test("retorne un statusCode 400 si exite un error por parte del cliente", async () => {
    mockEvent.body = JSON.stringify(mockData.getMockIncorrectParams);
    const res = await createController.create(mockEvent, context);
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(400);
  });
});
