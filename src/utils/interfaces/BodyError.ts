import { Body } from "./Body";

export interface BodyError extends Body {
  errorMessage: string;
  errorStack: string;
}
