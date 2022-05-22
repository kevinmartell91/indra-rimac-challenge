import { DBConnector } from "../model/DBConnector";
import { Planet } from "../model/Planet";
import { ListPlanetService } from "../service/listPlanetService";
import { BodyError } from "../utils/interfaces/BodyError";
import { BodySuccess } from "../utils/interfaces/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/interfaces/Response";

export class ListPlanetController extends ListPlanetService {
  constructor(dbConnector: DBConnector) {
    super(dbConnector);
  }

  // return planets only
  public listPlanets = async (): Promise<Response> => {
    try {
      const planets: Planet[] = await this.getList();
      // TODO: get the specifics of this case (dynamoDB | MySQL)
      // and return inside a bodySuccess
      // bodySuccess.rawData.engineClient
      // bodySuccess.rawData.metada
      // if (planets === null) return;
      const body: BodySuccess = {
        message: "Successfully retrieved planet list!.",
        data: planets,
      };

      if (planets === null) {
        body.message = "Se recibio su petición, pero vuelva a intertalo.";
        return ResponseUtil.successfulResponseNoContent(body);
      }
      if (planets.length === 0) {
        body.message = "No se encontraron registros de planetas.";
        body.data = [];
        return ResponseUtil.successfulResponseNoContent(body);
      }
      return ResponseUtil.successfulResponseOk(body);
    } catch (e) {
      const body: BodyError = {
        message: "Failed retrieved planet list!",
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.serverErrorBadRequest(body);
    }
  };
}
