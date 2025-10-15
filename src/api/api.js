import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",  // your FastAPI URL
});

export const predictDiabetes = (data) => API.post("/predict", data);
