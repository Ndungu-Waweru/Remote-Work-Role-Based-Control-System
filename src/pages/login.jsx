import { useState } from "react";
import "../styles/login.css";
import bgImage from "../assets/images/photo-1461749280684-dccba630e2f6.jpeg"; // make sure this exists

export default function Login({ login }) {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!username || !password || !role) {
      alert("Please fill in all fields and select a role");
      return;
    }
    login({ username, role, remember });
  };

  const handleForgotPassword = () => {
    alert("Forgot password functionality is not implemented yet!");
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <div className="form-group">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
            <option value="hr">HR</option>
            <option value="intern">Intern</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <div className="login-options">
          <div className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              id="remember"
            />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button
            className="forgot-password"
            type="button"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
