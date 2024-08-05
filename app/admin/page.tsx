"use client";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import DashboardHero from "../components/admin/DashboardHero/DashboardHero";

const Admin = () => {
  return (
    <div>
      <Heading title="Admin Dashboard" />
      <div className="lg:flex h-full bg-[#010313]">
        <div className=" 800px:block 1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[100%]">
          <DashboardHero isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
