import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { redirect } from "next/navigation";

type ProtectedRoute = {
  children: React.ReactNode;
};
const UseProtected: FC<ProtectedRoute> = ({ children }) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  return user ? children : redirect("/");
};

export default UseProtected;
