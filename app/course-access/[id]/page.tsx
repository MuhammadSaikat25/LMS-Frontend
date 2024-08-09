"use client";
import AccessCoursePage from "@/app/components/access-course/AccessCoursePage";
import Header from "@/app/components/Header";
import { useGetAllUserQuery } from "@/app/redux/feature/user/userApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import Heading from "@/app/utils/Heading";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CourseAccess = () => {
  const { id } = useParams();
  const router = useRouter();
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
    if (!User) {
      router.push("/");
    }
    if (isCoursePurchased?.length === 0) {
      router.push("/");
    }
  }, [User, isCoursePurchased]);
  return (
    <div>
      <Heading
        title="Coding-Hero"
        description="Let’s Code_Your Career"
        keyword="programming"
      />
      <Header />
      <div className="bg-[#010313] h-screen">
        <AccessCoursePage id={id} />
      </div>
    </div>
  );
};

export default CourseAccess;
