import { useAuth } from "@/auth/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="header">
      <span className="header-title">Remote Work RBAC</span>
      <div className="header-user">
        <span>{user.email}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
