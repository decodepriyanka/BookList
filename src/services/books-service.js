import axios from "axios";
import ENDPOINTS from "../constants/Endpoint";

const URL = ENDPOINTS.ALL_BOOKS;
export const getBooks = (limit) => axios.get(`${URL}?limit=${limit}`);
export const getBooksById = (id) => axios.get(`${URL}/${id}`);
