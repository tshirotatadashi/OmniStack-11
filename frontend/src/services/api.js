import axios from "axios";
import { BASE_URL as baseURL } from "../constants/enviroments";

const api = axios.create({
  baseURL
});

export default api;
