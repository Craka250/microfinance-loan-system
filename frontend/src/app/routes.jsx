import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import AdminLogin from "../auth/admin/AdminLogin";
import AdminRegister from "../auth/admin/AdminRegister";
import AdminResetPassword from "../auth/admin/AdminResetPassword";

import FinanceLogin from "../auth/finance/FinanceLogin";
import FinanceRegister from "../auth/finance/FinanceRegister";

import OfficerLogin from "../auth/loanOfficer/OfficerLogin";
import OfficerRegister from "../auth/loanOfficer/OfficerRegister";
import OfficerResetPassword from "../auth/loanOfficer/OfficerResetPassword";

// Dashboards
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import FinanceDashboard from "../dashboards/finance/Collections";
import OfficerDashboard from "../dashboards/officer/CustomerList";

// Guards
import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";

// Pages
import Unauthorized from "../pages/Unauthorized";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      {/* Admin Auth */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/reset-password" element={<AdminResetPassword />} />

      {/* Finance Auth */}
      <Route path="/finance/login" element={<FinanceLogin />} />
      <Route path="/finance/register" element={<FinanceRegister />} />

      {/* Officer Auth */}
      <Route path="/officer/login" element={<OfficerLogin />} />
      <Route path="/officer/register" element={<OfficerRegister />} />
      <Route path="/officer/reset-password" element={<OfficerResetPassword />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Finance Dashboard */}
      <Route
        path="/finance/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["finance"]}>
              <FinanceDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Officer Dashboard */}
      <Route
        path="/officer/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["officer"]}>
              <OfficerDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* System Pages */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />

    </Routes>
  );
}
