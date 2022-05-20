import { ScanCommandOutput } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { ListPlanetService } from "../service/listPlanetService";
import { BodyError } from "../utils/BodyError";
import { BodySuccess } from "../utils/BodySuccess";
import { ResponseUtil } from "../utils/ReponseUtil";
import { Response } from "../utils/Response";

export class ListPlanetController extends ListPlanetService {
  public listPlanets = async (): Promise<Response> => {
    try {
      const scan: ScanCommandOutput = await this.getList();
      if (scan.ScannedCount === 0) return ResponseUtil.successNoContent();

      const body: BodySuccess = {
        message: "Successfully retrieved planet list!.",
        data: scan.Items.map((item) => {
          return unmarshall(item);
        }),
        rawData: scan.Items,
      };
      return ResponseUtil.success(body);
    } catch (e) {
      const body: BodyError = {
        message: "Failed retrieved plaent list!",
        errorMessage: e.message,
        errorStack: e.errorStack,
      };
      return ResponseUtil.error(body);
    }
  };
}
