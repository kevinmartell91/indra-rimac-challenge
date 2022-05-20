import { PutItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { APIGatewayEvent, Context } from "aws-lambda";
import { Planet } from "../model/planet";
import { CreatePlanetService } from "../service/createPlanetService";
import { BodyError } from "../utils/BodyError";
import { BodySuccess } from "../utils/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/Response";
import { StatusCode } from "../utils/StatusCode";

export class CreatePlanetController extends CreatePlanetService {
  create = async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<Response> => {
    const newPlanet: Planet = JSON.parse(event.body);

    try {
      const output: PutItemCommandOutput = await this.createPlanet(newPlanet);

      if (output.$metadata.httpStatusCode !== StatusCode.success) {
        return ResponseUtil.successNoContent();
      }

      const body: BodySuccess = {
        message: "Successfully created planet!",
        data: newPlanet,
        rawData: output,
      };
      return ResponseUtil.success(body);
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
