import { DynamoDBConnection } from "./DynamoDBConnection";
import { expect, test } from "@jest/globals";

test("se conecta a DynamoDBClient", async () => {
  const dynamoDBClient = new DynamoDBConnection().Connect();
  expect(typeof dynamoDBClient).toBe("object");
});
