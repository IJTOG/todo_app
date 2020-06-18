const setToken = (headers) => {
  localStorage.setItem("access-token", headers);
};

const getToken = () => localStorage.getItem("access-token");

const removeToken = (dispatch) => {
  localStorage.removeItem("access-token");
  window.location.reload();
};

export { setToken, getToken, removeToken };
