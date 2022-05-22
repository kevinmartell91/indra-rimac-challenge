import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";
import { GetByIdPlanetController } from "../controller/getByIdPlanetController";
import { DynamoDBConnection } from "../model/DynamoDBConnection";
import { Response } from "../utils/interfaces/Response";
export const get: Handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<Response> => {
  const dynamoDBConnection = new DynamoDBConnection();

  const getByIdPlanetController = new GetByIdPlanetController(
    dynamoDBConnection
  );
  return await getByIdPlanetController.getById(event, context);
};
