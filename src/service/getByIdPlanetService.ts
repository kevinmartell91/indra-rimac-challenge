import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { DBConnector } from "../model/DBConnector";
import { Planet } from "../model/Planet";

export class GetByIdPlanetService {
  private ddbclient: DynamoDBClient;
  constructor(dBConnector: DBConnector) {
    this.ddbclient = dBConnector.Connect() as DynamoDBClient;
  }

  protected getPlanetById = async (id: string): Promise<Planet> => {
    try {
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Key: marshall({ id }),
      };

      const { Item } = await this.ddbclient.send(new GetItemCommand(params));

      if (Item === undefined) return null;

      return unmarshall(Item) as Planet;
    } catch (err) {
      console.log(err.errorStack);
      throw err;
    }
  };
}
