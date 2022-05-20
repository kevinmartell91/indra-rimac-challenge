import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export interface DBConnector {
  Connect: () => DynamoDBClient | "DBEngineXXX";
}
