"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "../../public/login.png";
import Link from "next/link";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import verifyToken from "../utils/verifyToken";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("123@gmail.com");
  const [password, setPassword] = useState("123456");
  const [login] = useLoginMutation();

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    const res = await login({ email, password });
   
    // const user = await verifyToken(res.data.token || "");
    router.push("/");
    dispatch(setUser({ user:{}, token: res?.data?.token }));
  };

  return (
    <div className="bg-custom-gradient h-screen relative ov">
      <form
        onSubmit={handelSubmit}
        className="bg-[#010313] z-50 left-[80px] bottom-[400px] lg:bg-[#080826] p-10 rounded-md absolute lg:left-[130px] lg:bottom-[260px] "
      >
        <h1 className="text-[#E8AAFF] text-3xl font-Poppins font-semibold mb-3">
          Login
        </h1>
        <div className="flex flex-col gap-6">
          <input
          defaultValue={"123@gmail.com"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#131237] rounded-md p-2 md:w-[300px] lg:w-[400px]"
            placeholder="Email"
            required
          />
          <input
            type="password"
            defaultValue={'123456'}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#131237] rounded-md p-2 lg:w-[400px]"
            placeholder="Password"
            required
          />
          <button className="text-[#E8AAFF] border border-blue-700 rounded  p-1 hover:bg-[#7D58EB] duration-500 font-Poppins font-semibold mb-3">
            Login
          </button>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <h1>New user?</h1>
          <Link href={"/register"} className="text-violet-600">
            Register Here
          </Link>
        </div>
      </form>
      {/* -------------- image --------------- */}
      <Image
        className="h-full absolute z-10 lg:z-50 lg:right-0  "
        src={img}
        alt="Login Image"
      />
    </div>
  );
};

export default Login;
