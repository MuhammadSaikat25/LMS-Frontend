import Link from "next/link";
import { FC } from "react";
import { MdContentPaste } from "react-icons/md";

type Props = {
  course: any;
  index: number;
};

const CourseCard: FC<Props> = ({ course, index }) => {
  const totalVideos = course.courseContent.reduce(
    (acc: number, content: any) => acc + content.videos.length,
    0
  );

  return (
    <Link href={`course/${course._id}`} className="bg-[#100530] rounded w-[250px] h-[180px]">
      <div className="">
        <img
          src={course.thumbnail}
          className="w-full h-24 object-cover"
          alt=""
        />
        <div className="p-2">
          <h1>{course.name}</h1>
          <div className="flex items-center justify-between">
            <span>{course.purchased} Students</span>
            <div className="flex items-center gap-1">
              <MdContentPaste />
              {totalVideos} Lectures
            </div>
          </div>
          <p>$ {course.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
