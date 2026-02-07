import api from "./api";

const AUTH = "/auth";

// =======================
// AUTH REQUESTS
// =======================

export const login = (data) => {
  return api.post(`${AUTH}/login`, data);
};

export const register = (data) => {
  return api.post(`${AUTH}/register`, data);
};

export const logout = () => {
  return api.post(`${AUTH}/logout`);
};

export const getProfile = () => {
  return api.get(`${AUTH}/profile`);
};

// =======================
// PASSWORD RESET
// =======================

export const requestReset = (email) => {
  return api.post(`${AUTH}/request-reset`, { email });
};

export const verifyReset = (payload) => {
  return api.post(`${AUTH}/verify-reset`, payload);
};

export const resetPassword = (payload) => {
  return api.post(`${AUTH}/reset-password`, payload);
};

export default {
  login,
  register,
  logout,
  getProfile,
  requestReset,
  verifyReset,
  resetPassword,
};
