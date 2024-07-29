import { FC } from "react";
import { CgClose } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";

type Props = {
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  active,
  benefits,
  prerequisites,
  setActive,
  setBenefits,
  setPrerequisites,
}) => {
  const handelBenefits = (i: number, title: string) => {
    const updateBenefits = [...benefits];
    updateBenefits[i].title = title;
    setBenefits(updateBenefits);
  };
  const handelPrerequisites = (i: number, title: string) => {
    const updatePrerequisites = [...prerequisites];
    updatePrerequisites[i].title = title;
    setPrerequisites(updatePrerequisites);
  };
  const deleteInput = (i: number) => {
    if (prerequisites.length > 1) {
      const filterInput = prerequisites.filter((v, index) => index !== i);
      setPrerequisites(filterInput);
    }
  };

  return (
    <div className="mt-[100px] lg:mt-0">
      <h1 className="lg:hidden text-center mb-2">Prerequisites and Benefits</h1>
      <div className="w-[80%] m-auto block bg-[#080826] p-4 mt-4">
        <div className="flex flex-col gap-2">
          <label htmlFor=""> Benefits of this course</label>
          {benefits.map((benefit: any, i: number) => (
            <input
              className="bg-[#131237] rounded p-1"
              type="text"
              key={i}
              required
              name="Benefit"
              placeholder="Benefits of This course"
              value={benefit.title}
              onChange={(e) => handelBenefits(i, e.target.value)}
            />
          ))}
          <IoAddCircle
            className="cursor-pointer"
            onClick={() => setBenefits([...benefits, { title: "" }])}
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="email"> Prerequisites of this course</label>
          {prerequisites.map((prerequisites: any, i: number) => (
            <div key={i} className="w-full flex items-center gap-2">
              <input
                className="bg-[#131237] rounded p-1 w-full"
                type="text"
                required
                name="prerequisites"
                placeholder="You need to know JS"
                value={prerequisites.title}
                onChange={(e) => handelPrerequisites(i, e.target.value)}
              />
              <CgClose
                className="cursor-pointer"
                onClick={() => deleteInput(i)}
              />
            </div>
          ))}
          <IoAddCircle
            className="cursor-pointer"
            onClick={() => setPrerequisites([...prerequisites, { title: "" }])}
          />
        </div>
        <div className="flex items-center gap-2 justify-between mt-3">
          <div
            onClick={() => setActive(active - 1)}
            className=" bg-blue-700 cursor-pointer  text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
          >
            Pre
          </div>
          <div
            onClick={() => setActive(active + 1)}
            className=" bg-blue-700 cursor-pointer text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseData;
