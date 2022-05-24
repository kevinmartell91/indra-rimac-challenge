import { SwApiProperty } from "./SwApiProperty";

export interface SwApiResourceSchema {
  description: string;
  title: string;
  required: string[];
  $schema: string;
  type: string;
  properties: { [key: string]: SwApiProperty };
}
