import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DBConnector } from "./DBConnector";

export class DynamoDBConnection implements DBConnector {
  Connect(): DynamoDBClient {
    return new DynamoDBClient({
      region: "us-west-2",
      endpoint: "http://localhost:8000",
    });
  }
}
