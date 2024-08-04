import { useGetHeroQuery } from "@/app/redux/feature/layout/layoutApi";
import { useState } from "react";

const EditHero = () => {
  const { data } = useGetHeroQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });
  const [image,setImage]=useState()
  const [title,setTitle]=useState('')
  const [subTitle,setSubTitle]=useState('')
  return (
    <div>
      <h1>Hello for hero</h1>
    </div>
  );
};

export default EditHero;
