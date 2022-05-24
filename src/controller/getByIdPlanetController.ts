import { APIGatewayEvent, Context } from "aws-lambda";
import { DBConnector } from "../model/DBConnector";
import { GetByIdPlanetService } from "../service/getByIdPlanetService";
import { getPlanetByIdSWAPIService } from "../service/swapi/services/getPlanetService";
import { textTypes } from "../utils/enums/textTypes";
import { BodyError } from "../utils/interfaces/BodyError";
import { BodySuccess } from "../utils/interfaces/BodySuccess";
import { Response } from "../utils/interfaces/Response";
import { ResponseUtil } from "../utils/ResponseUtil";

export class GetByIdPlanetController extends GetByIdPlanetService {
  constructor(dbConnector: DBConnector) {
    super(dbConnector);
  }
  getById = async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<Response> => {
    let planet;
    const id: string = event.pathParameters.id;
    const body: BodySuccess = {
      message: "Se recupero el planeta en forma exitosa.",
      data: void 0,
    };
    try {
      planet = await this.getPlanetById(id);
      // if exist in dynamodb, then return from it
      if (planet !== null) {
        body.data = planet;
        return ResponseUtil.successfulResponseOk(body);
      }
      // otherwise retrieve from swapi
      planet = await getPlanetByIdSWAPIService(id);
      if (!planet) {
        body.message = `No se encontraron registros con el id: ${id}`;
        body.data = {};
        return ResponseUtil.successfulResponseNoContent(body);
      } else {
        // setting 'body' property with where the data is comming
        // from, so its handler kwnows knows to comunicate with
        // create handler
        body.dataFrom = textTypes.externalDatabase;
      }

      // return response from swapi
      body.data = planet;
      return ResponseUtil.successfulResponseOk(body);
    } catch (e) {
      const body: BodyError = {
        message: `No se pudo recuperar el registros con id: ${id}`,
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.serverErrorBadRequest(body);
    }
  };
}
