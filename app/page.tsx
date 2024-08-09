"use client";

import Heading from "./utils/Heading";
import Header from "./components/Header";
import Course from "./components/home/course/Course";

const page = () => {
  return (
    <div>
      <Heading
        title="Coding-Hero"
        description="Let’s Code_Your Career"
        keyword="programming"
      />
      <Header />
      <Course />
    </div>
  );
};

export default page;
