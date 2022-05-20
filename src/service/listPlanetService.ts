import { ScanCommand, ScanCommandOutput } from "@aws-sdk/client-dynamodb";
import { dynamodb } from "../model/dynamodb";

export class ListPlanetService {
  protected getList = async (): Promise<ScanCommandOutput> => {
    return await dynamodb.send(
      new ScanCommand({
        TableName: process.env.DYNAMODB_TABLE_NAME,
      })
    );
  };
}
