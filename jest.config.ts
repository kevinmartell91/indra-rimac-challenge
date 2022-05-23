import type { Config } from "@jest/types";
// import { defaults, jsWithTs } from "ts-jest/presets/";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  // transform: {
  //   ...jsWithTs.transform,
  // },
  // preset: "@shelf/jest-dynamodb",
  preset: "ts-jest",
  testEnvironment: "node",
};
export default config;
