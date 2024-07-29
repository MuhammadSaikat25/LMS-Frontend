import React, { useState } from "react";
import CourseOption from "./CourseOption";
import CourseInfo from "./CourseInfo";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";

const CreateCourseComponent = () => {
  const [active, setActive] = useState(2);
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
      module: "Module 1",
      linksUrl: [
        {
          title: "Backend git Repo",
          url: "github/backend",
        },
      ],
      videos: [
        {
          title: "Js Into",
          url: "video url",
        },
        {
          title: "Node.js Installation",
          url: "video url",
        },
      ],
    },
  ]);
  const [courseData, setCourseData] = useState({});
  
  const handelSubmit = async () => {

  };
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
      </div>
      <div className="w-[10%] lg:w-[20%] mt-[100px] h-screen fixed z-[1] top-12 right-11">
        <CourseOption active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourseComponent;
