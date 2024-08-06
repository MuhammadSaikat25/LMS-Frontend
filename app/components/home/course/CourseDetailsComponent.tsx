import { useGetSingleCourseQuery } from "@/app/redux/feature/course/courseApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CoursePlayer from "../../admin/course/CoursePlayer";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { useGetAllUserQuery } from "@/app/redux/feature/user/userApi";
import CourseContentPage from "./CourseContentPage";

const CourseDetailsComponent = () => {
  const { id } = useParams();
  const User = useAppSelector((state: RootState) => state.auth.user);
  const { data: allUsers } = useGetAllUserQuery(undefined);
  const loginUser = allUsers?.data.filter(
    (user: any) => user.email === User!.email
  );

  let isCoursePurchased;
  if (loginUser) {
    isCoursePurchased = loginUser[0].courses.filter(
      (course: any) => course.courseId === id
    );
  }

  const { data } = useGetSingleCourseQuery(id!, { skip: !id });
  const [course, setCourse] = useState<any>();
  useEffect(() => {
    setCourse(data?.data);
  }, [data]);

  return (
    <div className="flex justify-between px-20 ">
      <div className="mt-4">
        <h1 className="font-Poppins text-xl">{course?.name}</h1>
        <h1>{course?.purchased} students purchased</h1>
        {/* --------------- benefits ------------ */}
        <div className="mt-7">
          <h1 className="text-[20px] font-Poppins">What you will learn from this Course ?</h1>
          {course?.benefits.map((benefit: any) => (
            <div className="flex items-center gap-2">
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              <h1>{benefit.title}</h1>
            </div>
          ))}
        </div>
        {/* -----------prerequisites ------------ */}
        <div className="mt-7">
          <h1 className="text-[20px] font-Poppins">What are the prerequisites of this Course ?</h1>
          {course?.prerequisite.map((prerequisite: any) => (
            <div className="flex items-center gap-2">
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              <h1>{prerequisite.title}</h1>
            </div>
          ))}
          <CourseContentPage courseContent={course?.courseContent}/>
        </div>
      </div>
      <div className="w-[400px]">
        {course && (
          <div className="w-full">
            <CoursePlayer
              demoUrl={course?.demoUrl}
              title=""
              setDemoVideoError={() => {}}
              setDemoVideoLoading={() => {}}
            />

            {!isCoursePurchased?.length && (
              <div className="">
                <button className="bg-violet-600 px-3 rounded-2xl w-fit mt-4 hover:bg-purple-950 duration-300 font-Poppins">Buy now ${course.price}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
