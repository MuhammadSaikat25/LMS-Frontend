"use client";
import EditHero from "@/app/components/admin/customization/EditHero";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";

const Hero = () => {
  return (
    <>
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
            <EditHero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
