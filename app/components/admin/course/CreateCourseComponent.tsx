import React, { useEffect, useState } from "react";
import CourseOption from "./CourseOption";
import CourseInfo from "./CourseInfo";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import CoursePreview from "./CoursePreview";
import { useCreateCourseMutation } from "@/app/redux/feature/course/courseApi";
import toast, { Toaster } from "react-hot-toast";

const CreateCourseComponent = () => {
  const [createCourse, { data, error, isLoading, isSuccess }] =
    useCreateCourseMutation();
  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatePrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      module: "",
      linksUrl: [
        {
          title: "",
          url: "",
        },
      ],
      videos: [
        {
          title: "",
          url: "",
        },
        {
          title: "",
          url: "",
        },
      ],
    },
  ]);
  const [courseData, setCourseData] = useState({});

  const handelSubmit = async () => {
    const benefit = benefits.map((benefit) => ({ title: benefit.title }));
    const prerequisite = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));
    const courseContent = courseContentData.map((course) => ({
      module: course.module,
      linksUrl: course.linksUrl.map((link) => ({
        title: link.title,
        url: link.url,
      })),
      videos: course.videos.map((video) => ({
        title: video.title,
        url: video.url,
      })),
    }));
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      estimatePrice: courseInfo.estimatePrice,
      tags: courseInfo.tags,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      thumbnail: '',
      benefit,
      prerequisite,
      courseContent,
    };
    setCourseData(data);
  };
  const handelCourseCreate = async (e: any) => {
    const course = courseData;
    console.log(course)
    if (!isLoading) {
      await createCourse(course);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Course create Successful");
    }
    if (error) {
      if ("data" in error) {
        const err = error as any;
        toast.error(err.data.message);
      }
    }
  }, [error, isLoading, isSuccess]);

  return (
    <div className=" w-full flex justify-between min-h-screen ">
      <div className="w-[80%] ">
        {active === 0 && (
          <CourseInfo
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 1 && (
          <CourseData
            benefits={benefits}
            setPrerequisites={setPrerequisites}
            prerequisites={prerequisites}
            setBenefits={setBenefits}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 2 && (
          <CourseContent
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            active={active}
            setActive={setActive}
            handelSubmit={handelSubmit}
          />
        )}
        {active === 3 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handelCourseCreate={handelCourseCreate}
          />
        )}
      </div>
      <div className="w-[10%] lg:w-[20%] mt-[100px] h-screen fixed z-[1] top-12 right-11">
        <Toaster />
        <CourseOption active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourseComponent;
