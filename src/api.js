import axios from "axios";
import { API_URL } from "./constants";

const importData = ({ base64, format }) =>
  axios.post(`${API_URL}/consumptions/import-data`, { base64, format });

const getConsumptions = () => axios.get(`${API_URL}/consumptions`);
const createConsumption = (consumption) => axios.post(`${API_URL}/consumptions/${id}`, consumption);
const deleteConsumption = (id) => axios.delete(`${API_URL}/consumptions/${id}`);
const editConsumption = (id, consumption) =>
  axios.put(`${API_URL}/consumptions/${id}`, consumption);

export default {
  importData,
  getConsumptions,
  deleteConsumption,
  editConsumption,
  createConsumption,
};
