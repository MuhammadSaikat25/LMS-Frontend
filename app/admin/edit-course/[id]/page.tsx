"use client";

import EditCourseComponent from "@/app/components/admin/edit-course/EditCourseComponent";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import { useParams } from "next/navigation";

const EditCourse = () => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <Heading title="Edit course" />
        <div className="lg:flex h-full bg-[#010313]">
          <div className=" 800px:block 1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[100%] ">
            <EditCourseComponent id={id as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
