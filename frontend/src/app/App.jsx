import { Routes, Route } from "react-router-dom";

// Auth
import AdminLogin from "./auth/admin/AdminLogin";
import FinanceLogin from "./auth/finance/FinanceLogin";

// Dashboards
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import CustomerList from "./dashboards/officer/CustomerList";
import Collections from "./dashboards/finance/Collections";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

// Pages
import Unauthorized from "./pages/Unauthorized";

export default function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/finance/login" element={<FinanceLogin />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Loan Officer */}
      <Route
        path="/officer/customers"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["officer"]}>
              <CustomerList />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Finance */}
      <Route
        path="/finance/collections"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["finance"]}>
              <Collections />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
