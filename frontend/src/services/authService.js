import api from "./api";

export const login = (endpoint, data) =>
  api.post(endpoint, data);

export const logout = () =>
  api.post("/auth/logout");

export const getProfile = () =>
  api.get("/auth/profile");
