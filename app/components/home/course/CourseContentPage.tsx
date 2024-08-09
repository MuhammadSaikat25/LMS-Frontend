import { FC, useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";

type Props = {
  courseContent: any;
};

const CourseContentPage: FC<Props> = ({ courseContent }) => {
  const [content, setContent] = useState([]);
  const [visibleModuleIndex, setVisibleModuleIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    setContent(courseContent);
  }, [courseContent]);

  const toggleModuleVisibility = (index: number) => {
    setVisibleModuleIndex(visibleModuleIndex === index ? null : index);
  };

  return (
    <div className="mt-7">
      <h1 className="text-[20px] font-Poppins">Course Overview</h1>
      {content && (
        <div className="">
          {content?.map((video: any, index: number) => (
            <div key={index}>
              <div className="cursor-pointer gap-1">
                <div className="">
                  <span onClick={() => toggleModuleVisibility(index)}>
                    {visibleModuleIndex === index ? (
                      <div className="flex items-center gap-4">
                        <h1>{video.module}</h1>
                        <span>
                          <LuMinus />
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <h1>{video.module}</h1>
                        <span>+</span>
                      </div>
                    )}
                  </span>
                </div>
                <h1>{video.videos.length} videos</h1>
              </div>
              {visibleModuleIndex === index && (
                <div className="mt-1 mb-1">
                  {video.videos.map((vi: any,i:number) => (
                    <div key={i} className="flex items-center gap-2">
                      <span>
                        <FaVideo size={10} />
                      </span>
                      <h1>{vi.title}</h1>
                    </div>
                  ))}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseContentPage;
