import React, { FC } from "react";
import Image from "next/image";
import defaultAvatar from "../../../public/Avatar-Profile-Vector.png";
import { IoLockClosed } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import { useAppDispatch } from "@/app/redux/hooks";
import { useRouter } from "next/navigation";
import { logOut } from "@/app/redux/feature/auth/authSlice";
import Link from "next/link";

type UserProps = {
  user: {
    [key: string]: string | number | null;
  };
};

const SideBarProfile: FC<UserProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logout = () => {
    router.push("/");
    dispatch(logOut());
  };
  return (
    <div className="w-full p-1 lg:pl-10 text-[12px] 800px:text-[14px]">
      <div className="w-full flex  items-center px-3 py-4 cursor-pointer">
        <Image
          className="mx-auto"
          src={user?.avatar ? (user.avatar as string) : defaultAvatar}
          alt="User Avatar"
          width={100}
          height={40}
        />
      </div>
      {/* ---------------- */}
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center justify-center gap-2">
          <IoLockClosed />
          <h1 className="font-Poppins justify-center">Change Password</h1>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <MdOutlineCastForEducation />
          <h1 className="font-Poppins"> Enroll Course</h1>
        </div>
        <div className="flex font-Poppins items-center gap-2 justify-center">
          <MdOutlineCastForEducation />
          <Link href={"/admin"}>Admin Dashboard</Link>
        </div>
        <div
          className="flex justify-center items-center cursor-pointer gap-2"
          onClick={() => logout()}
        >
          <CiLogout />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBarProfile;
