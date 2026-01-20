import { Navigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

const RequireAuth = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.some(r => user.roles.includes(r))) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireAuth;
