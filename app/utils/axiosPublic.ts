import axios from "axios";

const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
