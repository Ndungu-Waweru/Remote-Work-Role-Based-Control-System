import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import Reports from "@/pages/Reports";
import RequireAuth from "@/auth/RequireAuth";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { ROLES } from "@/config/roles";

const AppRoutes = () => (
  <Routes>
    {/* Public Route */}
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route
      element={
        <RequireAuth>
          <ProtectedLayout />
        </RequireAuth>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/users"
        element={
          <RequireAuth allowedRoles={[ROLES.ADMIN]}>
            <Users />
          </RequireAuth>
        }
      />
      <Route
        path="/reports"
        element={
          <RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.MANAGER]}>
            <Reports />
          </RequireAuth>
        }
      />
    </Route>

    {/* Redirect unknown paths */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default AppRoutes;
