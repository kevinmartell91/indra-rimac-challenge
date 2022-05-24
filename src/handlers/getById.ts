import {
  APIGatewayEvent,
  Context,
  Handler,
  APIGatewayProxyCallback,
} from "aws-lambda";
import { GetByIdPlanetController } from "../controller/getByIdPlanetController";
import { DynamoDBConnection } from "../model/DynamoDBConnection";
import { createPlanetViaHandler } from "../utils/helpers/createPlanetViaHandler";
import { BodySuccess } from "../utils/interfaces/BodySuccess";
import { Response } from "../utils/interfaces/Response";
export const get: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: APIGatewayProxyCallback
): Promise<Response> => {
  const dynamoDBConnection = new DynamoDBConnection();
  const getByIdPlanetController = new GetByIdPlanetController(
    dynamoDBConnection
  );

  let response: Response = await getByIdPlanetController.getById(
    event,
    context
  );
  const body: BodySuccess = JSON.parse(response.body);
  /**
   * check whether this handler needs to invoke the
   * handler that creates a new planet
   */
  if (body.dataFrom) {
    response = await createPlanetViaHandler(event, context, callback, response);
  }

  return response;
};
