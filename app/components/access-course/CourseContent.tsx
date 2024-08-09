import { FC, useState } from "react";

import AccessCoursePlayer from "./AccessCoursePlayer";
import CourseVideoList from "./CourseVideoList";

type Props = {
  course: any;
};

const CourseContent: FC<Props> = ({ course }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeModule, setActiveModule] = useState(0);

  const nextFn = () => {
    const isLastVideoInModule =
      activeVideo === course?.courseContent[activeModule].videos.length - 1;

    const isLastModule = activeModule === course?.courseContent.length - 1;

    if (isLastVideoInModule) {
      if (isLastModule) {
        console.log("Course completed");
        return;
      }

      setActiveModule(activeModule + 1);
      setActiveVideo(0);
    } else {
      setActiveVideo(activeVideo + 1);
    }
  };

  const previousFn = () => {
    const isFirstVideoInModule = activeVideo === 0;

    const isFirstModule = activeModule === 0;

    if (isFirstVideoInModule) {
      if (isFirstModule) {
        return;
      }

      setActiveModule(activeModule - 1);
      setActiveVideo(course.courseContent[activeModule - 1].videos.length - 1);
    } else {
      setActiveVideo(activeVideo - 1);
    }
  };

  return (
    <div >
      {course && (
        <div className="bg-[#010313] h-screen pt-4">
          <div className="w-[90%] mx-auto ">
            <div className="">
              {course && (
                <div className="">
                  <AccessCoursePlayer
                    demoUrl={
                      course?.courseContent[activeModule].videos[activeVideo]
                        .url
                    }
                    title={
                      course?.courseContent[activeModule].videos[activeVideo]
                        .title
                    }
                    activeModule={activeModule}
                    setActiveVideo={setActiveVideo}
                    setActiveModule={setActiveModule}
                    activeVideo={activeVideo}
                  />
                </div>
              )}
              {/* --------------- pre and next btn course title--------------- */}
              <div className="flex items-center justify-between mt-2">
                <h1 className="font-mono lg:text-[20px]">
                  {
                    course?.courseContent[activeModule].videos[activeVideo]
                      .title
                  }
                </h1>
                <div className="flex items-center gap-5 justify-end">
                  <div
                    className={`${activeVideo === 0 ? "" : "cursor-pointer"}`}
                    onClick={() => previousFn}
                  >
                    <p className="bg-blue-950 text-white px-4 rounded-3xl">Previous </p>
                  </div>
                  <div
                    className={`${activeVideo === 0 ? "cursor-pointer" : ""}`}
                    onClick={() => nextFn()}
                  >
                    <p className="bg-blue-950 text-white px-4 rounded-3xl">Next </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <CourseVideoList
              courseContent={course?.courseContent}
              setActiveVideo={setActiveVideo}
              setActiveModule={setActiveModule}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
