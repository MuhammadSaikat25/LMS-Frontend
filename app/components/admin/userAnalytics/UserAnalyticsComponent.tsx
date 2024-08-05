import { useGetUserAnalyticsQuery } from "@/app/redux/feature/analytics/analyticsApi";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserAnalyticsComponent = () => {
  const [analytics, setAnalytics] = useState([]);
  const { data: userAnalytics } = useGetUserAnalyticsQuery(undefined);

  useEffect(() => {
    if (userAnalytics) {
      setAnalytics(userAnalytics.data.last12Months);
    }
  }, [userAnalytics]);

  const newData = analytics.map((value: any) => {
    return {
      name: value.month,
      order: value.count,
    };
  });

  return (
    <div style={{ width: "80%", height: "70%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={newData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
          <Bar dataKey="order" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAnalyticsComponent;
