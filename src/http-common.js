import axios from "axios";
import { BASE_API, token } from "./const/endpoints";
export default axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-type": "application/json",
    "Authorization":"Bearer " + token,
  }
});