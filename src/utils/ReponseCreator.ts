import { BuildBodyJson } from "./BuildBodyJson";
import { Body } from "./interfaces/Body";
import { Response } from "./interfaces/Response";

export class ResponseCreator {
  static CreateResponse(statusCode: number, body?: Body): Response {
    const response: Response = {
      statusCode: statusCode,
      body: BuildBodyJson.bodyToString(body),
    };
    return response;
  }
}
