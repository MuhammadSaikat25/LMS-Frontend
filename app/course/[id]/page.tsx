"use client";
import CourseDetails from "@/app/components/home/course/CourseDetails";
import { useGetSingleCourseQuery } from "@/app/redux/feature/course/courseApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  return (
    <div>
      <CourseDetails />
    </div>
  );
};

export default page;
