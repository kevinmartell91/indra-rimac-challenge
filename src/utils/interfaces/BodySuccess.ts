import { Body } from "./Body";

export interface BodySuccess extends Body {
  data: object;
  rawData?: object;
  dataFrom?: string;
  details?: string;
}
