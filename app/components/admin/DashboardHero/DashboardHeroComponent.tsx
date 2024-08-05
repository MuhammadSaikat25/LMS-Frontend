import CircularProgress from "@mui/material/CircularProgress";
import {
  useGetCourseAnalyticsQuery,
  useGetUserAnalyticsQuery,
} from "@/app/redux/feature/analytics/analyticsApi";
import { PiUsersThreeFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import OrderAnalyticsComponent from "../orderAnalytics/OrderAnalytics";
import CourseAnalyticsComponent from "../courseAnalytics/CourseAnalyticsComponent";
import { useGetAllOrdersQuery } from "@/app/redux/feature/order/orderApi";
import { CgDollar } from "react-icons/cg";

type Props = {
  open?: boolean;
  value?: string;
};
const DashboardHeroComponent = ({ open }: Props) => {
  const { data: userAnalytics } = useGetUserAnalyticsQuery(undefined);
  const { data: courseAnalytics } = useGetCourseAnalyticsQuery(undefined);
  const { data: allOrders } = useGetAllOrdersQuery(undefined);
  const [orders, setOrders] = useState(0);
  const [courses, setCourses] = useState();
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const user = userAnalytics?.data?.last12Months.reduce(
      (pre: any, curr: any) => pre + curr.count,
      0
    );
    const course = courseAnalytics?.data?.last12Months.reduce(
      (pre: any, curr: any) => pre + curr.count,
      0
    );
    setCourses(course);
    const order = allOrders?.data?.reduce(
      (pre: any, curr: any) => pre + curr.courseId.price,
      0
    );
    setOrders(order);

    if (user > 20) {
      setUsers(user);
    } else {
      setUsers(49);
    }
  }, [userAnalytics, courseAnalytics, allOrders]);

  return (
    <div className="w-full h-screen lg:flex lg:mt-[30px] lg:p-10">
      <div className="w-full h-[30%] lg:h-[40%]">
        <CourseAnalyticsComponent />
        <OrderAnalyticsComponent />
      </div>
      <div className="relative z-10 mt-[100px] mx-auto w-fit lg:mt-0 ">
        {/* user info */}
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-5 rounded">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <PiUsersThreeFill />
              Total User
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={users} />
              <p>+{users}%</p>
            </div>
          </div>
        </div>
        {/* course info */}
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-5 rounded mt-3">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <MdOutlineCastForEducation />
              Total Courses
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={courses} />
              <p>+{courses}%</p>
            </div>
          </div>
        </div>
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-5 rounded mt-3">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <CgDollar />
              Total Income
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={orders} />
              <p>$ {orders}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeroComponent;
