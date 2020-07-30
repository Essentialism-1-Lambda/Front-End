import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    //baseURL: "https://essentialism-bw.herokuapp.com/api",
    baseURL: "https://jsonplaceholder.typicode.com/users",
    headers: {
      Authorization: token
    }
  });
};