import Image from "next/image";
import { FC } from "react";
import defaultAvatar from "../../../public/Avatar-Profile-Vector.png";
import { useUpdateAvatarMutation } from "@/app/redux/feature/user/userApi";
type UserProps = {
  user: { [key: string]: string | number };
};

const ProfileInfo: FC<UserProps> = ({ user }) => {
  const [updateAvatar] = useUpdateAvatarMutation();

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        updateAvatar({ avatar: fileReader.result });
      }
    };
  };

  return (
    <div className=" bg-[#080826] lg:absolute mt-3 lg:mt-0 800px:top-[100px] 800px:right-[500px] p-3 rounded ">
      <div className="flex flex-col gap-4  md:w-[600px]">
        <Image
          className="cursor-pointer mx-auto"
          src={user?.avatar ? (user.avatar as string) : defaultAvatar}
          alt="User Avatar"
          width={60}
          height={40}
        />
        <input
          className="bg-[#131237] p-1 rounded"
          type="text"
          defaultValue={user?.name}
        />
        <input
          className="bg-[#131237] p-1 rounded"
          type="text"
          value={user?.email}
        />
        <h1 className="text-center text-white bg-purple-700 rounded cursor-pointer">
          Update Data
        </h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
