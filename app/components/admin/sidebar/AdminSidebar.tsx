"use client";
import { useState } from "react";
import defaultAvatar from "../../../../public/Avatar-Profile-Vector.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const AdminSidebar = () => {
  const currentPath = usePathname();
  const [openSidebar, setOpeSideBar] = useState(false);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpeSideBar(false);
      }
    }
  };
  
  return (
    <div className=" lg:bg-[#170F21] lg:h-full w-full">
      <div className="hidden bg-[#170F21] h-full overflow-scroll overflow-y-auto overflow-x-hidden lg:flex flex-col items-center">
        <Image
          src={defaultAvatar}
          width={100}
          height={100}
          className="mx-auto"
          alt=""
        />
        <h1>Saikat</h1>
        <Link href={"/"}>Home</Link>
        <h1>Admin</h1>

        <div className="flex flex-col gap-3">
          <Link
            className={`${
              currentPath === "/admin" && "text-[#8C35EC]"
            }`}
            href={"/admin"}
          >
           Dashboard
          </Link>
          {/* ------------- Data ------------ */}
          <div className="">
            <h1>Data</h1>
            <div className="flex flex-col gap-1">
              <Link
                className={`${
                  currentPath === "/admin/users" && "text-[#8C35EC]"
                }`}
                href={"/admin/users"}
              >
                Users
              </Link>
              <Link  href={'/admin/lnvoice'} className={`${
                  currentPath === "/admin/lnvoice" && "text-[#8C35EC]"
                }`}>Invoice</Link>
            </div>
          </div>
          {/* ---------  Content ------------- */}
          <div className="">
            <h1>Content</h1>
            <div className="">
              <Link
                className={`${
                  currentPath === "/admin/create-course" && "text-[#8C35EC]"
                }`}
                href={"/admin/create-course"}
              >
                Create Course
              </Link>
            </div>
            <div className="">
              <Link
                className={`${
                  currentPath === "/admin/courses" && "text-[#8C35EC]"
                }`}
                href={"/admin/courses"}
              >
                All Courses
              </Link>
            </div>
          </div>
          {/* ---------- Controllers */}
          <div className="">
            <h1>Controllers</h1>
            <div className="flex flex-col gap-3">
              <Link
                href={"/admin/manage-team"}
                className={`${
                  currentPath === "/admin/manage-team" && "text-[#8C35EC]"
                }`}
              >
                Manage Team
              </Link>
            </div>
          </div>
          {/* --------------- Customization ------------ */}
          <div className="flex flex-col gap-3">
            <Link href={"/admin/hero"}>Hero</Link>
            <Link href={"/admin/faq"}>FAQ</Link>
            <Link href={"/"}>categories</Link>
          </div>
          {/* Analytics */}
          <div className="flex flex-col gap-3">
            <Link href={"/admin/course-analytics"}>Course-analytics</Link>
            <Link href={"/admin/order-analytics"}>Order-analytics</Link>
            <Link href={"/admin/user-analytics"}>User-analytics</Link>
          </div>
        </div>
      </div>
      {/* ---------------------mobile ----------------------- */}
      <div className=" lg:hidden">
        <CiMenuFries
          onClick={() => setOpeSideBar(true)}
          color="white"
          size={40}
        />
      </div>
      {openSidebar && (
        <div
          onClick={handelClose}
          className="fixed w-full h-screen top-0 z-[99999] lg:hidden"
          id="screen"
        >
          <div className="w-[50%] fixed z-[999999999] h-screen bg-[#2E2960] p-2 dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
            <div>
              <Image
                src={defaultAvatar}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h1>Saikat</h1>
              <Link href={"/"}>Home</Link>
              <h1>Admin</h1>

              <div className="flex flex-col gap-3">
                <h1>Dashboard</h1>
                {/* ------------- Data ------------ */}
                <div className="">
                  <h1>Data</h1>
                  <div className="">
                    <h1>User</h1>
                    <h1>Invoice</h1>
                  </div>
                </div>
                {/* ---------  Content ------------- */}
                <div className="">
                  <h1>Content</h1>
                  <div className="">
                    <Link
                      className={`${
                        currentPath === "/admin/create-course" && "bg-red-600"
                      }`}
                      href={"/admin/create-course"}
                    >
                      Create Course
                    </Link>
                    <h1>Live Course</h1>
                  </div>
                </div>
                {/* --------------- Customization ------------ */}
                <div className="flex flex-col gap-3">
                  <Link href={"/"}>Hero</Link>
                  <Link href={"/"}>FAQ</Link>
                  <Link href={"/"}>categories</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
