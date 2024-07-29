"use client";
import { FC, useState } from "react";

type Props = {
  courseInfo: any;
  active: number;
  setActive: (active: number) => void;
  setCourseInfo: (courseInfo: any) => void;
};
const CourseInfo: FC<Props> = ({
  active,
  courseInfo,
  setActive,
  setCourseInfo,
}) => {
  const [dragging, setDragging] = useState(false);
  const handelSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };
  const handelFile = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragleave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.file?.[0];
    if (file) {
      const render = new FileReader();
      render.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: render.result });
      };
      render.readAsDataURL(file);
    }
  };
  return (
    <div className="mt-[30px] text-center">
      <h1 className="mb-5 font-m">Course Information</h1>
      <div className="w-[80%] m-auto lg:mt-10 bg-[#080826] p-5 ">
        <form onSubmit={handelSubmit} className="flex flex-col gap-2">
          <div className="lg:flex flex-col gap-2">
            <label htmlFor="">Course Name</label>
            <input
              className="bg-[#131237] rounded p-1 w-full"
              type="text"
              name=""
              id="name"
              placeholder="Course Name"
              required
              value={courseInfo.name}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Course Description</label>
            <textarea
              className="bg-[#131237] p-1 rounded"
              cols={20}
              rows={4}
              name=""
              id="name"
              placeholder="Course Description"
              required
              value={courseInfo.description}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, description: e.target.value })
              }
            />
          </div>
          <div className="w-full lg:flex justify-between items-center gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="">Price</label>
              <input
                className="bg-[#131237] rounded p-1 w-full"
                type="number"
                name=""
                id="name"
                placeholder="Course Price"
                required
                value={courseInfo.price}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, price: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">estimate Price </label>
              <input
                className="bg-[#131237] rounded p-1 "
                type="number"
                name=""
                id="name"
                placeholder="Course estimatePrice"
                required
                value={courseInfo.estimatePrice}
                onChange={(e: any) =>
                  setCourseInfo({
                    ...courseInfo,
                    estimatePrice: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Course Tags</label>
            <input
              className="bg-[#131237] p-1 rounded"
              name=""
              id="name"
              placeholder="Course Tags"
              required
              value={courseInfo.tags}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, tags: e.target.value })
              }
            />
          </div>
          <div className="w-full lg:flex justify-between items-center gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="">Course Level</label>
              <input
                className="bg-[#131237] rounded p-1 w-full"
                type="text"
                name=""
                id="name"
                placeholder="Course level"
                required
                value={courseInfo.level}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, level: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">DemoUrl </label>
              <input
                className="bg-[#131237] rounded p-1 "
                type="text"
                name=""
                id="name"
                placeholder="Demo Url"
                required
                value={courseInfo.demoUrl}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full bg-[#131237] cursor-pointer text-center p-2 rounded-md mt-2">
            <input
              type="file"
              accept="image/*"
              id="file"
              className="hidden"
              onChange={handelFile}
            />
            <label
              htmlFor="file"
              onDragLeave={handleDragleave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              Upload Image
              {courseInfo.thumbnail && (
                <img
                  className="w-full object-cover h-[200px]"
                  src={courseInfo.thumbnail}
                  alt=""
                />
              )}
            </label>
          </div>
          <br />
          <div className="text-right cursor-pointer">
            <input
              type="submit"
              value={"Next"}
              className=" bg-blue-700 cursor-pointer text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseInfo;
