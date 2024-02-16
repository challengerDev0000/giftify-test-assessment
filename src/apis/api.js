import axios from "axios";
import { API_RESP_STATUS } from "../utils/constants";

const Axios = axios.create({
  baseURL: "https://api.magicthegathering.io/v1",
});

export const getCardData = async (param) => {
  return await Axios.get(`/cards`, {
    params: param,
  })
    .then((response) => {
      return {
        status:
          response.status === 200
            ? API_RESP_STATUS.SUCCESS
            : API_RESP_STATUS.FAIL,
        data: response.data.cards,
        totalCount: response.headers["total-count"],
      };
    })
    .catch((error) => {
      return {
        status: "" + error.response?.status,
        data: error.response?.statusText,
      };
    });
};
