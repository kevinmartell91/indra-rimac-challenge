import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";
import { CreatePlanetController } from "../controller/createPlanetController";
import { DynamoDBConnection } from "../model/DynamoDBConnection";

const dynamoDBConnection = new DynamoDBConnection();
export const createPlanetController: CreatePlanetController =
  new CreatePlanetController(dynamoDBConnection);

export const create: Handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return await createPlanetController.create(event, context);
};
