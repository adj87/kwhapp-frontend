import axios from "axios";
import { API_URL } from "./constants";

const importData = ({ base64, format }) =>
  axios.post(`${API_URL}/consumptions/import-data`, { base64, format });

const getConsumptions = () => axios.get(`${API_URL}/consumptions`);
const createConsumption = (consumption) => axios.post(`${API_URL}/consumptions`, consumption);
const deleteConsumption = (id) => axios.delete(`${API_URL}/consumptions/${id}`);
const editConsumption = (consumption) =>
  axios.put(`${API_URL}/consumptions/${consumption._id}`, consumption);

const allMethods = {
  importData,
  getConsumptions,
  deleteConsumption,
  editConsumption,
  createConsumption,
};

export default allMethods;
