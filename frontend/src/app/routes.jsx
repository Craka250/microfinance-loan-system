import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../auth/admin/AdminLogin";
import AdminRegister from "../auth/admin/AdminRegister";
import AdminResetPassword from "../auth/admin/AdminResetPassword";

import FinanceLogin from "../auth/finance/FinanceLogin";
import FinanceRegister from "../auth/finance/FinanceRegister";

import OfficerLogin from "../auth/loanOfficer/OfficerLogin";
import OfficerRegister from "../auth/loanOfficer/OfficerRegister";
import OfficerResetPassword from "../auth/loanOfficer/OfficerResetPassword";

import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";

import AdminDashboard from "../dashboards/admin/AdminDashboard";
import FinanceDashboard from "../dashboards/finance/Collections";
import OfficerDashboard from "../dashboards/officer/CustomerList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />

        {/* Finance */}
        <Route path="/finance/login" element={<FinanceLogin />} />
        <Route path="/finance/register" element={<FinanceRegister />} />

        {/* Loan Officer */}
        <Route path="/officer/login" element={<OfficerLogin />} />
        <Route path="/officer/register" element={<OfficerRegister />} />
        <Route path="/officer/reset-password" element={<OfficerResetPassword />} />

        {/* Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute role="admin">
                <AdminDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/finance/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute role="finance">
                <FinanceDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/officer/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute role="officer">
                <OfficerDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}
