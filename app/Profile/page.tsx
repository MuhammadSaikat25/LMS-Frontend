"use client";
import React from "react";
import UseProtected from "../hooks/useProtected";
import ProfileComponent from "../components/profile/ProfileComponent";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Profile = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const name = user?.name + " profile";
  return (
    <div>
      <UseProtected>
        <Header />
        <Heading
          title={name!}
          description="Let’s Code_Your Career"
          keyword="programming"
        />
        <ProfileComponent />
      </UseProtected>
    </div>
  );
};

export default Profile;
