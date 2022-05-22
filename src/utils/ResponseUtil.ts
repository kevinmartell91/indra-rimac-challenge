import { Body } from "./interfaces/Body";
import { clientErrorStatusCode } from "./enums/clientErrorStatusCode";
import { ResponseCreator } from "./ReponseCreator";
import { serverErrorStatusCode } from "./enums/serverErrorStatusCode";
import { succesfulStatusCode } from "./enums/successfulStatusCode";
import { Response } from "./interfaces/Response";

export class ResponseUtil {
  public static successfulResponseNoContent = (body: Body): Response => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.NoContent, body);
  };
  public static successfulResponseCreated = (body: Body): Response => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.Created, body);
  };
  public static successfulResponseOk = (body: Body): Response => {
    return ResponseCreator.CreateResponse(succesfulStatusCode.Ok, body);
  };
  public static serverErrorBadRequest = (body: Body): Response => {
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
