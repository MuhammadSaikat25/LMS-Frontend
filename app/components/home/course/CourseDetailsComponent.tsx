import { useGetSingleCourseQuery } from "@/app/redux/feature/course/courseApi";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CoursePlayer from "../../admin/course/CoursePlayer";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { useGetAllUserQuery } from "@/app/redux/feature/user/userApi";
import CourseContentPage from "./CourseContentPage";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

type Props = {
  clientSecret: any;
  stripePromise: any;
};

const CourseDetailsComponent: FC<Props> = ({ clientSecret, stripePromise }) => {
  const router = useRouter();
  const { id } = useParams();
  const { data } = useGetSingleCourseQuery(id!, { skip: !id });
  const [course, setCourse] = useState<any>();
  const [open, setOpen] = useState(false);
  const User = useAppSelector((state: RootState) => state.auth.user);
  const { data: allUsers } = useGetAllUserQuery(undefined);
  const loginUser =
    User && allUsers?.data.filter((user: any) => user.email === User?.email);

  let isCoursePurchased;
  if (loginUser) {
    isCoursePurchased = loginUser[0].courses.filter(
      (course: any) => course.courseId === id
    );
  }

  useEffect(() => {
    setCourse(data?.data);
  }, [data]);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpen(false);
      }
    }
  };
  return (
    <div className="flex justify-between px-20 ">
      <Toaster />
      <div className="mt-4">
        <h1 className="font-Poppins text-xl">{course?.name}</h1>
        <h1>{course?.purchased} students purchased</h1>
        {/* --------------- benefits ------------ */}
        <div className="mt-7">
          <h1 className="text-[20px] font-Poppins">
            What you will learn from this Course ?
          </h1>
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
          <h1 className="text-[20px] font-Poppins">
            What are the prerequisites of this Course ?
          </h1>
          {course?.prerequisite.map((prerequisite: any) => (
            <div className="flex items-center gap-2">
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              <h1>{prerequisite.title}</h1>
            </div>
          ))}
          <CourseContentPage courseContent={course?.courseContent} />
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

            {isCoursePurchased?.length ? (
              <div className="mt-2">
                <button
                  onClick={() => {
                    if (!User) {
                      toast.error("Login first");
                      setTimeout(() => {
                        router.push("/login");
                      }, 1000);
                      return;
                    }
                    router.push(`/course-access/${course._id}`);
                  }}
                  className="bg-violet-600 px-3 rounded-2xl w-fit mt-4 hover:bg-purple-950 duration-300 font-Poppins"
                >
                  Access To Course
                </button>
              </div>
            ) : (
              <div className="">
                <button
                  onClick={() => {
                    if (!User) {
                      toast.error("Login first");
                      setTimeout(() => {
                        router.push("/login");
                      }, 1000);
                      return;
                    }
                    setOpen(true);
                  }}
                  className="bg-violet-600 px-3 rounded-2xl w-fit mt-4 hover:bg-purple-950 duration-300 font-Poppins"
                >
                  Buy now ${course.price}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {open && (
        <div
          onClick={handelClose}
          className="fixed w-full h-screen top-0 z-10 "
          id="screen"
        >
          <div className="w-fit h-fit p-3 rounded bg-white absolute top-[30%] left-[30%]">
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm course={course} />
              </Elements>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsComponent;
