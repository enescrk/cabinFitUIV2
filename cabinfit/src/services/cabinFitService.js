import { axios } from "./axios";

const apiUrl = "https://cabinfitapi.cabin.com.tr";

const authorization = `Bearer 1a0e12a3-147d-4f5a-bdae-dc588293b91e`;
var headerBrand = localStorage.getItem("brandId") ? JSON.parse(localStorage.getItem("brandId")) : null;
var headerUser = localStorage.getItem("User-Id") ? localStorage.getItem("User-Id") : null;
var headerProduct = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) : "";


export const cabinService = {
  isProductAvailable(productCode) {
    if(productCode != 'test'){
      throw new Error("Ürün bulunamadı.");
    }
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
  
};
