import Link from "next/link";
import { FC } from "react";

type Props = {
  activeItem: number;
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
];

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
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
                      activeItem === index
                        ? "linear-gradient(260.06deg, rgb(255, 55, 242) -4.88%, rgb(64, 90, 255) 89.47%)"
                        : "",
                  }}
                  className={`${
                    activeItem === index ? "p-2 rounded-md" : ""
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
          <div className="w-full text-center py-6">
            {NavLinkData.map((i, index) => (
              <Link key={index} href={i.path} passHref>
                <span
                  className={`${
                    activeItem === index ? "bg-[#8C35EC] px-1 rounded-md" : ""
                  }`}
                >
                  {i.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
