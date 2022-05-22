import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { Planet } from "../model/Planet";
import { DBConnector } from "../model/DBConnector";
import { succesfulStatusCode } from "../utils/enums/successfulStatusCode";

export class CreatePlanetService {
  private ddbClient: DynamoDBClient;
  constructor(DBConnetor: DBConnector) {
    this.ddbClient = DBConnetor.Connect() as DynamoDBClient;
  }
  protected createPlanet = async (params: Planet): Promise<Planet> => {
    try {
      const newItem: PutItemCommandInput = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Item: marshall(params),
      };

      const output = await this.ddbClient.send(new PutItemCommand(newItem));
      if (output.$metadata.httpStatusCode !== succesfulStatusCode.Ok)
        return null;
      return params as Planet;
    } catch (error) {
      throw error;
    }
  };
}
