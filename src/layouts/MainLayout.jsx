import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200 text-base-content">
      <Topbar />
      <Outlet />

      <Footer />
    </div>
  );
}
