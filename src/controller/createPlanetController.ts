import { APIGatewayEvent, Context } from "aws-lambda";
import { DBConnector } from "../model/DBConnector";
import { Planet } from "../model/Planet";
import { CreatePlanetService } from "../service/createPlanetService";
import { BodyError } from "../utils/BodyError";
import { BodySuccess } from "../utils/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/Response";

export class CreatePlanetController extends CreatePlanetService {
  constructor(dbConnector: DBConnector) {
    super(dbConnector);
  }
  create = async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<Response> => {
    const params: Planet = JSON.parse(event.body);

    //VALIDATIONS
    //ADD BodyValidator

    try {
      const newPlanet = await this.createPlanet(params);
      const body: BodySuccess = {
        message: "Successfully created planet!",
        data: newPlanet,
      };

      if (newPlanet === null) {
        body.message = "Se recibio su petición, pero vuelva a intertalo.";
        return ResponseUtil.successNoContent(body);
      }

      return ResponseUtil.successCreatead(body);
    } catch (e) {
      const body: BodyError = {
        message: "Failed created planet",
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.error(body);
    }
  };
}
