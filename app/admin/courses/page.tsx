"use client";
import AllCourse from "@/app/components/admin/courses/AllCourse";
import DashboardHero from "@/app/components/admin/DashboardHero";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";

const Course = () => {
  return (
    <div>
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
          <div className="w-[85%] mx-auto mt-3 overflow-scroll lg:overflow-hidden">
            {/* <DashboardHero /> */}
            <AllCourse/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
