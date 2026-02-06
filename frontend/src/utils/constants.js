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

export const DASHBOARD_STATS = {
  totalCustomers: 1240,
  activeLoans: 418,
  totalDisbursed: 18500000,
  totalCollected: 12360000,
  defaultRate: "6.2%",
};

export const LOAN_CHART_DATA = [
  { name: "Jan", loans: 120 },
  { name: "Feb", loans: 210 },
  { name: "Mar", loans: 300 },
  { name: "Apr", loans: 260 },
  { name: "May", loans: 340 },
  { name: "Jun", loans: 380 },
];
