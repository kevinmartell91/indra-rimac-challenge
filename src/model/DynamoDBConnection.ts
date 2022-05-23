import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DBConnector } from "./DBConnector";

export class DynamoDBConnection implements DBConnector {
  Connect(): DynamoDBClient {
    const config = {
      ...(process.env.IS_OFFLINE && {
        region: "us-west-2",
        endpoint: "http://localhost:8000",
        ...(process.env.JEST_WOKER_ID && {
          endpoint: "localhost:8000",
          sslEnable: false,
          region: "local-env",
        }),
      }),
    };

    return new DynamoDBClient(config);
  }
}
