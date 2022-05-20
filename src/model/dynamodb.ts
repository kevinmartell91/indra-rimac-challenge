import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dynamodb = new DynamoDBClient({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
});
