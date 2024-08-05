import { FC, useState } from "react";
import DashboardHeroComponent from "./DashboardHeroComponent";

type Props = {
  isDashboard: boolean;
};
const DashboardHero: FC<Props> = ({ isDashboard }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="">
      {isDashboard && <DashboardHeroComponent open={open} />}
    </div>
  );
};

export default DashboardHero;
