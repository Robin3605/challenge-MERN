import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY; // Ajusta la URL según tu configuración

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getSpecialPrice = async (userId, productId) => {
  const response = await axios.get(`${API_URL}/prices/${userId}/${productId}`);
  return response.data;
};
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createSpecialPrice = async (data) => {
  const response = await axios.post(`${API_URL}/prices`, data);
  return response.data;
};
