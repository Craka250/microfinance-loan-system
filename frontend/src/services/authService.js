import api from "./api";

export const login = (endpoint, data) => {
  return api.post(endpoint, data);
};

export const register = (endpoint, data) => {
  return api.post(endpoint, data);
};

export const logout = () => {
  return api.post("/auth/logout");
};

export const getProfile = () => {
  return api.get("/auth/profile");
};

export const requestReset = (endpoint, email) => {
  return api.post(endpoint, { email });
};

export const verifyReset = (endpoint, payload) => {
  return api.post(endpoint, payload);
};

export const resetPassword = (endpoint, payload) => {
  return api.post(endpoint, payload);
};
