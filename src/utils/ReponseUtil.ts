import { Body } from "./interfaces/Body";
import { clientErrorStatusCode } from "./enums/clientErrorStatusCode";
import { ResponseCreator } from "./ReponseCreator";
import { serverErrorStatusCode } from "../utils/enums/ServerErrorStatusCode";
import { succesfulStatusCode } from "../utils/enums/StatusCode";

export class ResponseUtil {
  public static successfulResponseNoContent = (body: Body) => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.NoContent, body);
  };
  public static successfulResponseCreated = (body: Body) => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.Created, body);
  };
  public static successfulResponseOk = (body: Body) => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.Ok, body);
  };
  public static serverErrorBadRequest = (body: Body) => {
    return ResponseCreator.CreateResponse(
      serverErrorStatusCode.BadRequets,
      body
    );
  };
  public static clientErrorBadRequest = (body: Body) => {
    return ResponseCreator.CreateResponse(
      clientErrorStatusCode.BadRequets,
      body
    );
  };
}
