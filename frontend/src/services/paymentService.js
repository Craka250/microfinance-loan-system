import api from "./api";

export const makePayment = (data) => api.post("/payments", data);
export const getLoanPayments = (loanId) =>
  api.get(`/payments/${loanId}`);
export const getDefaulters = () => api.get("/reports/defaulters");
