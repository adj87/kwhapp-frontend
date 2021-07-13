import axios from "axios";
import { API_URL } from "./constants";

const importData = ({ base64, format }) =>
  axios.post(`${API_URL}/consumptions/import-data`, { base64, format });

const getConsumptions = () => api.get(`${API_URL}/consumptions`);

export default { importData, getConsumptions };
