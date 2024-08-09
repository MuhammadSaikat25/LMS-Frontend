import { FC, useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";

type Video = {
  title: string;
  url: string;
};

type Module = {
  module: string;
  videos: Video[];
};

type Props = {
  courseContent: Module[];
  setActiveModule: (activeVideo: number) => void;
  setActiveVideo: (active: number) => void;
};

const CourseVideoList: FC<Props> = ({
  courseContent,
  setActiveModule,
  setActiveVideo,
}) => {
  const [content, setContent] = useState<Module[]>([]);
  const [visibleModuleIndex, setVisibleModuleIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    setContent(courseContent);
  }, [courseContent]);

  const toggleModuleVisibility = (index: number) => {
    setVisibleModuleIndex(visibleModuleIndex === index ? null : index);
  };

  const handleVideoClick = (moduleIndex: number, videoIndex: number) => {
    setActiveVideo(videoIndex);
    setActiveModule(moduleIndex);
  };

  return (
    <div className="bg-[#010313] h-fit mt-2 mb-3">
      <h1 className="text-[20px] font-Poppins">Course Overview</h1>
      {content && (
        <div className="">
          {content?.map((video, moduleIndex: number) => (
            <div key={moduleIndex}>
              <div className="cursor-pointer gap-1">
                <div className="">
                  <span onClick={() => toggleModuleVisibility(moduleIndex)}>
                    {visibleModuleIndex === moduleIndex ? (
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
                {/* <h1>{video.videos.length} videos</h1> */}
              </div>
              {visibleModuleIndex === moduleIndex && (
                <div className="mt-1 mb-1">
                  {video.videos.map((vi, videoIndex: number) => (
                    <div
                      key={videoIndex}
                      className="flex items-center gap-2"
                      onClick={() => handleVideoClick(moduleIndex, videoIndex)}
                    >
                      <span>
                        <FaVideo size={10} />
                      </span>
                      <h1>{vi.title}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseVideoList;
