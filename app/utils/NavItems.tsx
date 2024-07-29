"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

type Props = {
  isMobile: boolean;
};

const NavLinkData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Course",
    path: "/course",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "FAQ",
    path: "/FAQ",
  },
  {
    name: "Police",
    path: "/police",
  },

  {
    name: "Login",
    path: "/login",
  },
];

const NavItems: FC<Props> = ({ isMobile }) => {
  const currentPath = usePathname();
  const Router = useRouter();
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <>
      <div className="hidden 800px:flex">
        <div className="800px:flex 800px:flex-row gap-5">
          {NavLinkData.map((i, index) => (
            <div key={index} className="flex items-center">
              <Link href={i.path} passHref>
                <span
                  style={{
                    background:
                      currentPath === i.path
                        ? "linear-gradient(260.06deg, rgb(255, 55, 242) -4.88%, rgb(64, 90, 255) 89.47%)"
                        : "",
                  }}
                  className={`font-mono ${
                    currentPath === i.path ? "p-2 rounded-md" : ""
                  }`}
                >
                  {i.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------- mobile ------------------ */}
      {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center flex flex-col gap-8 py-6">
            {NavLinkData.map((i, index) => (
              <Link key={index} href={i.path} passHref>
                <span
                  className={`font-mono ${
                    currentPath === i.path ? "bg-[#8C35EC] px-1 rounded-md" : ""
                  }`}
                >
                  {i.name}
                </span>
              </Link>
            ))}

            {user && (
              <CgProfile
                color="white"
                className="cursor-pointer mx-auto"
                size={30}
                onClick={() => Router.push("/Profile")}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
