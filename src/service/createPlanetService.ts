import { PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { dynamodb } from "../model/dynamodb";
import { Planet } from "../model/planet";

export class CreatePlanetService {
  protected createPlanet = async (params: Planet) => {
    try {
      const newItem: PutItemCommandInput = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Item: marshall(params),
      };
      return dynamodb.send(new PutItemCommand(newItem));
    } catch (error) {
      throw error;
    }
  };
}
