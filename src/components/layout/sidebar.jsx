import { NavLink } from "react-router-dom";
import { PERMISSIONS } from "@/config/permissions";
import Can from "@/auth/Can";

const Sidebar = () => (
  <aside className="sidebar">
    <NavLink to="/dashboard">Dashboard</NavLink>

    <Can permission={PERMISSIONS.MANAGE_USERS}>
      <NavLink to="/users">Users</NavLink>
    </Can>

    <Can permission={PERMISSIONS.VIEW_REPORTS}>
      <NavLink to="/reports">Reports</NavLink>
    </Can>
  </aside>
);

export default Sidebar;
