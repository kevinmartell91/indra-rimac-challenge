import { APIGatewayEvent, APIGatewayProxyCallback, Context } from "aws-lambda";
import { create } from "../../handlers/create";
import { Planet } from "../../model/Planet";
import { succesfulStatusCode } from "../../utils/enums/successfulStatusCode";
import { textTypes } from "../../utils/enums/textTypes";
import { mapToPlanet } from "../../utils/helpers/mapToPlanet";
import { BodySuccess } from "../../utils/interfaces/BodySuccess";
import { Response } from "../../utils/interfaces/Response";

export const createPlanetViaHandler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: APIGatewayProxyCallback,
  response: Response
): Promise<Response> => {
  if (!event || !context || !callback) return null;

  const getPlanetByIdBody: BodySuccess = JSON.parse(response.body);
  /**
   * Instanciate CreatePlanetController you want to passs
   * another database engine as an input parameter (Eg. MySQL).
   *  => const createControllerWithMySqlConnection =
   *        new CreatePlanetController(MySqlConnnection);
   * then use its create method:
   *  => const createPlanetResponse =
   *        await createControllerWithMySqlConnection.create(event, context);
   */

  // pass the right body to the event
  const createdPlanet = getPlanetByIdBody.data as Planet;
  // transform to right data tyes
  const rightFormatPlanet: Planet = mapToPlanet(createdPlanet);
  console.log("rightFormatPlanet", rightFormatPlanet);

  // set external id and other parameters like the URL source (SWAPI url)
  const externalId = event.pathParameters.id;
  rightFormatPlanet.externalId = externalId;
  rightFormatPlanet.externalUrl = event.multiValueHeaders.Host + event.path;

  // update the event.body with rightFormatPlanet object
  event.body = JSON.stringify(rightFormatPlanet);

  // invoke create method of the create handler
  const createPlanetResponse = await create(event, context, callback);

  if (
    createPlanetResponse &&
    createPlanetResponse.statusCode === succesfulStatusCode.Ok
  ) {
    // inform the 'response' a new planet was created in
    // internal database (dyanmodb)
    getPlanetByIdBody.details = textTypes.messageSavedInteranlDatabase;
    // update the 'eesponse'
    response.body = JSON.stringify(getPlanetByIdBody);
  }
  return response;
};
