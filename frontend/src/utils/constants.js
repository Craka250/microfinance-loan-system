export const ROLES = {
  ADMIN: "admin",
  OFFICER: "officer",
  FINANCE: "finance",
};

export const SIDEBAR_LINKS = {
  admin: [
    { label: "Dashboard", path: "/admin" },
    { label: "Loan Analytics", path: "/admin/analytics" },
    { label: "Reports", path: "/admin/reports" },
    { label: "Users", path: "/admin/users" },
  ],

  officer: [
    { label: "Customers", path: "/officer/customers" },
    { label: "Create Loan", path: "/officer/loan/create" },
    { label: "Approvals", path: "/officer/loan/approvals" },
    { label: "Payments", path: "/officer/payments" },
  ],

  finance: [
    { label: "Collections", path: "/finance/collections" },
    { label: "Defaulters", path: "/finance/defaulters" },
  ],
};
