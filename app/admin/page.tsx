"use client";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import DashboardHero from "../components/admin/DashboardHero";

const Admin = () => {
  return (
    <div className="">
      <Heading
        title="Coding Hero - Admin"
        description="welcome admin to Coding Hero"
        keyword="Programming"
      />
      <div className="lg:flex h-svh  bg-[#010313] ">
        <div className="1500px:w-[13%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
         <DashboardHero/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
