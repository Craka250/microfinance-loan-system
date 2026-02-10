import api from "./api";

const AUTH = "/auth";

// Toggle this when backend is ready
const USE_FAKE_AUTH = true;

// =======================
// FAKE AUTH (DEV MODE)
// =======================

const fakeLogin = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email === "fake@admin.com" &&
        data.password === "admin12345"
      ) {
        resolve({
          data: {
            token: "fake-jwt-token",
            user: {
              id: 1,
              name: "Admin User",
              role: "admin",
              email: data.email,
            },
          },
        });
      } else {
        reject({
          response: {
            data: { message: "Invalid credentials" },
          },
        });
      }
    }, 800);
  });
};

// =======================
// AUTH REQUESTS
// =======================

export const login = (data) => {
  if (USE_FAKE_AUTH) return fakeLogin(data);
  return api.post(`${AUTH}/login`, data);
};

export const register = (data) => {
  if (USE_FAKE_AUTH) {
    return Promise.resolve({ data: { success: true } });
  }
  return api.post(`${AUTH}/register`, data);
};

export const logout = () => {
  if (USE_FAKE_AUTH) return Promise.resolve({ data: true });
  return api.post(`${AUTH}/logout`);
};

export const getProfile = () => {
  if (USE_FAKE_AUTH) {
    return Promise.resolve({
      data: {
        id: 1,
        name: "Admin User",
        role: "admin",
        email: "fake@admin.com",
      },
    });
  }
  return api.get(`${AUTH}/profile`);
};

// =======================
// PASSWORD RESET
// =======================

export const requestReset = (email) => {
  if (USE_FAKE_AUTH) return Promise.resolve({ data: true });
  return api.post(`${AUTH}/request-reset`, { email });
};

export const verifyReset = (payload) => {
  if (USE_FAKE_AUTH) return Promise.resolve({ data: true });
  return api.post(`${AUTH}/verify-reset`, payload);
};

export const resetPassword = (payload) => {
  if (USE_FAKE_AUTH) return Promise.resolve({ data: true });
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
