import { useGetSingleCourseQuery } from "@/app/redux/feature/course/courseApi";
import { FC, useEffect, useState } from "react";
import CourseContent from "./CourseContent";

type Props = {
  id: any;
};
const AccessCoursePage: FC<Props> = ({ id }) => {
  const { data: enrollCourse } = useGetSingleCourseQuery(id, {
    skip: !id,
  });
  const [course, setCourse] = useState();
  useEffect(() => {
    setCourse(enrollCourse?.data);
  }, [enrollCourse]);

  return (
    <div >
      <CourseContent course={course} />
    </div>
  );
};

export default AccessCoursePage;
