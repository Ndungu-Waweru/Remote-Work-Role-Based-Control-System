import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => (
  <div className="app-layout">
    <Sidebar />
    <main className="main-content">
      <Header />
      <Outlet />
    </main>
  </div>
);

export default ProtectedLayout;
