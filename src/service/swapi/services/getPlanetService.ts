import { axiosClient } from "../config/axios";
import { Planet } from "../../../model/Planet";
import { swapiConfig } from "../config/swapiConfig";
import { mapJsonToSpanishPropertiesObject } from "../utils/mapJsonToSpanishPropertieObject";

export const getPlanetByIdSWAPIService = async (
  id: string
): Promise<Planet> => {
  const response = await axiosClient.get(`${swapiConfig.resource}/${id}`);
  console.log("mapJsonToSpanishPropertiesObject", response);
  return mapJsonToSpanishPropertiesObject(response.data);
};
