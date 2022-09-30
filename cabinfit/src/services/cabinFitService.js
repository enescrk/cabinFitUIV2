import { axios } from "./axios";

const apiUrl = "https://cabinfitapi.cabin.com.tr";

const authorization = `Bearer 1a0e12a3-147d-4f5a-bdae-dc588293b91e`;
const headerBrand = localStorage.getItem("brandId") ? JSON.parse(localStorage.getItem("brandId")) : 2;
const headerUser = localStorage.getItem("User-Id") ? JSON.parse(localStorage.getItem("User-Id")) : null;
const headerProduct = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) : "";


export const cabinService = {
  isProductAvailable(productCode) {
    return axios.get(`${apiUrl}/api/Product/${productCode}/IsAvailable`, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? "",
        "User-Id": headerUser ?? ""
      }
    });
  },
  saveUser(model) {
    return axios.post(`${apiUrl}/api/User`, model, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? null,
        "User-Id": headerUser ?? null,
        "Product-Id": headerProduct,
        "Brand-User-Id": null
      }
    });
  },
  checkRequiredBodyParts() {
    return axios.get(`${apiUrl}/api/Bodypart/Required`, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? null,
        "User-Id": headerUser ?? null,
        "Product-Id": headerProduct
      }
    });
  },
  getBodypartOptions(id) {
    return axios.get(`${apiUrl}/api/Bodypart/${id}/Options`, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? null,
        "User-Id": headerUser ?? null,
        "Product-Id": headerProduct
      }
    });
  },
  saveBodyPart(model) {
    return axios.post(`${apiUrl}/api/Bodypart`, model, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? null,
        "User-Id": headerUser ?? null,
        "Product-Id": headerProduct,
        "Brand-User-Id": null
      }
    });
  },
  getFitness() {
    return axios.get(`${apiUrl}/api/Fitness`, {
      headers: {
        "Authorization": authorization,
        "Brand-Id": headerBrand ?? null,
        "User-Id": headerUser ?? null,
        "Product-Id": headerProduct
      }
    });
  },
  
};
