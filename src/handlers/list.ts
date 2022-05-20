"use strict";
import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { ListPlanetController } from "../controller/listPlanetControlller";

export const list: Handler = async (): Promise<APIGatewayProxyResult> => {
  const listPlanetController = new ListPlanetController();
  return await listPlanetController.listPlanets();
};
