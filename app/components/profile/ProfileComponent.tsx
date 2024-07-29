import React from "react";
import SideBarProfile from "./SideBarProfile";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import ProfileInfo from "./ProfileInfo";

const ProfileComponent = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <div className="bg-[#010313] h-screen md:flex gap-2 relative p-3 lg:p-0">
      <div className=" 800px:w-[250px] lg:h-[450px] lg:absolute lg:top-10 lg:left-4 bg-[#170F21] text-white ">
        <SideBarProfile user={user!} />
      </div>
      <div className="">
        <ProfileInfo user={user!} />
      </div>
    </div>
  );
};

export default ProfileComponent;
