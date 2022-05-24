import axios, { AxiosInstance } from "axios";
import { swapiConfig } from "./swapiConfig";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: swapiConfig.baseURL,
});
