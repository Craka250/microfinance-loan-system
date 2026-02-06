import api from "./api";

export const createLoan = (data) => api.post("/loans", data);
export const getLoans = () => api.get("/loans");
export const approveLoan = (id) => api.put(`/loans/${id}/approve`);
export const getCustomerLoans = (customerId) =>
  api.get(`/loans/customer/${customerId}`);
