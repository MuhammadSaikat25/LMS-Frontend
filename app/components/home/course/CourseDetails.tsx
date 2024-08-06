import Heading from "@/app/utils/Heading";

import Header from "../../Header";
import CourseDetailsComponent from "./CourseDetailsComponent";

const CourseDetails = () => {
  return (
    <div>
      <Heading
        title="Coding-Hero"
        description="Let’s Code_Your Career"
        keyword="programming"
      />
      <Header />
      <div className="bg-[#010313] h-svh">
        <CourseDetailsComponent />
      </div>
    </div>
  );
};

export default CourseDetails;
