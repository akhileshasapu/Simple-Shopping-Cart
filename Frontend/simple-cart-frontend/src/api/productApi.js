import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchProducts = () => axios.get(`${API_URL}/products`).then(res => res.data);

export const checkout = (items) => axios.post(`${API_URL}/checkout`, { items }).then(res => res.data);
