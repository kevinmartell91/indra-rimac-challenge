import { APIGatewayEvent, Context } from "aws-lambda";
import { DBConnector } from "../model/DBConnector";
import { GetByIdPlanetService } from "../service/getByIdPlanetService";
import { getPlanetByIdSWAPIService } from "../SwAPi/services/getPlanetService";
import { BodyError } from "../utils/interfaces/BodyError";
import { BodySuccess } from "../utils/interfaces/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/interfaces/Response";

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
      message: "Successfully retrieved planet",
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
        body.message = "No se encontraron registros con ese id.";
        body.data = {};
        return ResponseUtil.successfulResponseNoContent(body);
      }
      // then create a new planet in dynamo
      // TODO: JHOW?
      // return response from swapi
      body.data = planet;
      return ResponseUtil.successfulResponseOk(body);
    } catch (e) {
      const body: BodyError = {
        message: "Failed retrieved planet.",
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.serverErrorBadRequest(body);
    }
  };
}
