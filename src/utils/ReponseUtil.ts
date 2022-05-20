import { Body } from "./Body";
import { ResponseCreator } from "./ReponseCreator";
import { StatusCode } from "./StatusCode";

export class ResponseUtil {
  public static successNoContent = () => {
    return ResponseCreator.CreateResponse(StatusCode.successNoContent);
  };
  public static success = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.success, body);
  };
  public static error = (body: Body) => {
    return ResponseCreator.CreateResponse(StatusCode.error, body);
  };
}
