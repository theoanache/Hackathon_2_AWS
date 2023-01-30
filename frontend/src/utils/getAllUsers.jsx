import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const requestApi = (finalUrl) => {
  return axios.get(apiUrl + finalUrl).then((response) => response.data[0]);
};

// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = () => {
  return requestApi("user/");
};
