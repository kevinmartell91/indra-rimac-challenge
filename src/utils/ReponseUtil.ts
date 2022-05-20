import { Body } from "./Body";
import { ResponseCreator } from "./ReponseCreator";
import { StatusCode } from "./StatusCode";

export class ResponseUtil {
  public static successNoContent = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.successNoContent, body);
  };
  public static successCreatead = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.successCreated, body);
  };
  public static successOk = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.successOk, body);
  };
  public static error = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.error, body);
  };
}
