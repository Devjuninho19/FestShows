import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/2f208dc425164bfb9c1830630d3042f9",
  timeout: 1000,
});
