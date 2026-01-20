import { useAuth } from "@/auth/useAuth";

const Can = ({ permission, children, fallback = null }) => {
  const { user } = useAuth();
  if (!user?.permissions?.includes(permission)) return fallback;
  return children;
};

export default Can;
