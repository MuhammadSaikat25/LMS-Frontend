import { FC, useState } from "react";
import CoursePlayer from "./CoursePlayer";

interface Props {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handelCourseCreate: any;
}

const CoursePreview: FC<Props> = ({
  active,
  courseData,
  handelCourseCreate,
  setActive,
}) => {
  const [demoVideoLoading, setDemoVideoLoading] = useState(true);
  const [demoVideoError, setDemoVideoError] = useState<string | null>(null);
  const createCourse = () => {
    handelCourseCreate();
  };
  return (
    <div>
      <CoursePlayer
        demoUrl={courseData.demoUrl}
        title={courseData.title}
        setDemoVideoLoading={setDemoVideoLoading}
        setDemoVideoError={setDemoVideoError}
        demoVideoLoading={demoVideoLoading}
        demoVideoError={demoVideoError}
      />
      <div className="w-[67%] mx-auto">
        <h1>Buy</h1>
        <div className="">
          <div
            className=""
            onClick={() => {
              setActive(active - 1);
            }}
          >
            pre
          </div>
          <div onClick={() => createCourse()} className="">
            create course
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
