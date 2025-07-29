import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-orange-50">
      <Header />
      {/* Page content goes here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24">
        {/* 👆 pt-24 or adjust to match your header height */}
        <Outlet />
      </div>
    </div>
  );
}
