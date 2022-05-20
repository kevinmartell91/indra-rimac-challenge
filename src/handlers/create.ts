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
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return await createPlanetController.create(event, context);
};
