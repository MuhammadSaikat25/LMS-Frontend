"use client";
import { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}
const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="Coding-Hero"
        description="Let’s Code_Your Career"
        keyword="programming"
      />
      <Header activeItem={activeItem} open={open} setOpen={setOpen} />
    </div>
  );
};

export default page;
