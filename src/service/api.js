import axios from "axios";

export const getUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

export const getUserDetail = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

export const createUser = (user) => {
  return axios.post("https://reqres.in/api/users", user);
};

export const updateUser = (id, user) => {
  return axios.put(`https://reqres.in/api/users/${id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
