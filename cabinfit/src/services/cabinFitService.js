import {axios} from "./axios";

export const characterService = {
  getAllCharacters(params) {
    return axios.get("/character", {
      params
    });
  }
};
