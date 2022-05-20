import { BuildBodyJson } from "./BuildBodyJson";
import { Body } from "./Body";
import { Response } from "./Response";

export class ResponseCreator {
  static CreateResponse(statusCode: number, body?: Body): Response {
    const response: Response = {
      statusCode: statusCode,
      body: BuildBodyJson.bodyToString(body),
    };
    return response;
  }
}
