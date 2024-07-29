"use client";
import Heading from "@/app/utils/Heading";
import CreateCourseComponent from "../../components/admin/course/CreateCourseComponent";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";


const CreateCourse = () => {
  return (
    <div>
      <Heading title="Crete course" />
      <div className="lg:flex h-full bg-[#010313]">
        <div className=" 800px:block 1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[100%] ">
          <CreateCourseComponent />
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
