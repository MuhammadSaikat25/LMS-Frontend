"use client";
import Link from "next/link";
import { FC, useState } from "react";
import NavItems from "../utils/NavItems";
import { CiMenuFries } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import logo from "../../public/ph_logo.png";
import Image from "next/image";
interface Props {
  activeItem: number;
}

const Header: FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const [openSidebar, setOpeSideBar] = useState(false);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpeSideBar(false);
      }
    }
  };
  return (
    <div
      className="w-full relative"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <div className="">
        <div className="p-6 flex items-center justify-between lg:px-[160px]">
          <Link href={"/"} className="flex items-center">
            <Image src={logo} width={50} height={50} alt="image" />
            <h1>Coding Hero</h1>
          </Link>
          <div className="lg:flex items-center gap-3">
            <NavItems isMobile={false} />
            <div className="800px:hidden">
              <CiMenuFries
                color="white"
                size={30}
                onClick={() => setOpeSideBar(true)}
              />
            </div>
            <div className="hidden 800px:block">
              {user && (
                <CgProfile
                  className="cursor-pointer"
                  size={20}
                  onClick={() => router.push("/Profile")}
                />
              )}
            </div>
          </div>
        </div>

        {/* --------------- mobile sidebar -------------  */}
        {openSidebar && (
          <div
            onClick={handelClose}
            className="fixed w-full h-screen top-0 z-[99999] 800px:hidden"
            id="screen"
          >
            <div className="w-[50%] fixed z-[999999999] h-screen bg-[#2E2960] dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
