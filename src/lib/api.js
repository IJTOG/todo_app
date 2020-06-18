import axios from "axios";
import { setToken } from "./auth";

const host = "https://candidate.neversitup.com/todo";
const port = process.env.port;
// --------------------------------------- Always attached Access token(If exist) ------------------------------------------
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access-token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

const login = async (username, password) => {
  try {
    let response = await axios.post(`${host}/users/auth`, {
      username,
      password
    });
    setToken(response.data.token);
    window.location.href = "Todo";
  } catch (err) {
    return Promise.reject(err);
  }
};

const getTodos = async () => {
  try {
    let response = await axios.get(`${host}/todos`);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const getProduct = async (_id) => {
  try {
    let response = await axios.get(
      `http://${host}:${port}/api/products/` + _id
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const createTodo = async (form) => {
  try {
    let response = await axios.post(`${host}/todos`, form);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const updateTodo = async (form) => {
  try {
    let response = await axios.patch(
      `http://${host}:${port}/api/products/update`,
      form
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const deleteTodo = async (_id) => {
  try {
    let response = await axios.delete(`${host}/todos/` + _id);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { login, getTodos, getProduct, deleteTodo, updateTodo, createTodo };
