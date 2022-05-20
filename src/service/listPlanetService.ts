import {
  DynamoDBClient,
  ScanCommand,
  ScanCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { DBConnector } from "../model/DBConnector";
import { Planet } from "../model/Planet";
import { StatusCode } from "../utils/StatusCode";

export class ListPlanetService {
  private ddbClient: DynamoDBClient;
  constructor(dbConnector: DBConnector) {
    this.ddbClient = dbConnector.Connect() as DynamoDBClient;
  }

  protected getList = async (): Promise<Planet[]> => {
    const planets: Planet[] = [];
    try {
      const scan: ScanCommandOutput = await this.ddbClient.send(
        new ScanCommand({
          TableName: process.env.DYNAMODB_TABLE_NAME,
        })
      );

      if (scan.Count === 0) return [];

      scan.Items.map((item) => {
        planets.push(unmarshall(item) as Planet);
      });
    } catch (error) {
      throw error;
    }
    return planets;
  };
}
