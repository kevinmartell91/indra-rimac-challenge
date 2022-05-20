"use strict";
import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { ListPlanetController } from "../controller/listPlanetControlller";
import { DynamoDBConnection } from "../model/DynamoDBConnection";

export const list: Handler = async (): Promise<APIGatewayProxyResult> => {
  const dynamoDBConnection = new DynamoDBConnection();
  const listPlanetController = new ListPlanetController(dynamoDBConnection);
  return await listPlanetController.listPlanets();
};
