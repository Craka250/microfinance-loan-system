import api from "./api";

export const login = (endpoint, data) =>
  api.post(endpoint, data);

export const logout = () =>
  api.post("/auth/logout");

export const getProfile = () =>
  api.get("/auth/profile");

import api from "./api";

export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const requestReset = (email) =>
  api.post("/auth/reset-request", { email });
export const verifyReset = (payload) =>
  api.post("/auth/reset-verify", payload);
export const resetPassword = (payload) =>
  api.post("/auth/reset-password", payload);
