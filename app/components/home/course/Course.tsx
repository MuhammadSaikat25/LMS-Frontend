import { useGetAllCourseForStudentQuery } from "@/app/redux/feature/course/courseApi";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  const { data: AllCourse } = useGetAllCourseForStudentQuery(undefined);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(AllCourse?.data);
  }, [AllCourse]);

  return (
    <div className="lg:w-[80%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses?.map((course: any, i: number) => (
          <CourseCard key={i} course={course} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Course;
