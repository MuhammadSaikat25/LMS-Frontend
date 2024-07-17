"use client";
import Link from "next/link";
import { FC, useState } from "react";
import NavItems from "../utils/NavItems";
import { CiMenuFries } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
}
const Header: FC<Props> = ({ activeItem, open, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpeSideBar] = useState(false);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpeSideBar(false);
      }
    }
  };
  return (
    <div className="w-full relative bg-[#070723]">
      <div className="p-6 flex items-center justify-between lg:px-[160px]">
        <Link href={"/"}>
          <h1>Coding Hero</h1>
        </Link>
        <div className="lg:flex items-center gap-3">
          <NavItems activeItem={activeItem} isMobile={false} />
          <div className="800px:hidden">
            <CiMenuFries
              color="white"
              size={30}
              onClick={() => setOpeSideBar(true)}
            />
          </div>
          <div className="hidden 800px:block">
            <CgProfile size={20} onClick={() => setOpen(true)} />
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
          <div className="w-[70%] fixed z-[999999999] h-screen bg-[#4446EA] dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
            <NavItems activeItem={activeItem} isMobile={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
