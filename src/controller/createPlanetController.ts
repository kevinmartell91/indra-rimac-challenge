import { APIGatewayEvent, Context } from "aws-lambda";
import { DBConnector } from "../model/DBConnector";
import { Planet } from "../model/Planet";
import { PlanetValidator } from "../utils/PlanetValidator";
import { CreatePlanetService } from "../service/createPlanetService";
import { Body } from "../utils/interfaces/Body";
import { BodyError } from "../utils/interfaces/BodyError";
import { BodySuccess } from "../utils/interfaces/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/interfaces/Response";
import { v4 as uuidv4 } from "uuid";

export class CreatePlanetController extends CreatePlanetService {
  constructor(dbConnector: DBConnector) {
    super(dbConnector);
  }
  create = async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<Response> => {
    const params: Planet = JSON.parse(event.body);
    const validator = new PlanetValidator();
    // VALIDATIONS
    const validations = validator.validate(params);
    if (Object.keys(validations).length > 0) {
      const body: Body = { message: JSON.stringify(validations) };
      return ResponseUtil.clientErrorBadRequest(body);
    }
    //  END VALIDATION

    try {
      //set id to planet
      params.id = uuidv4();
      const newPlanet = await this.createPlanet(params);
      const body: BodySuccess = {
        message: "Successfully created planet!",
        data: newPlanet,
      };

      if (newPlanet === null) {
        body.message = "Se recibio su petición, pero vuelva a intertalo.";
        return ResponseUtil.successfulResponseNoContent(body);
      }

      return ResponseUtil.successfulResponseCreated(body);
    } catch (e) {
      const body: BodyError = {
        message: "Failed created planet",
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.serverErrorBadRequest(body);
    }
  };
}
