import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useUpdateUserMutation } from "@/app/redux/feature/user/userApi";
import toast, { Toaster } from "react-hot-toast";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#080826",

  boxShadow: 24,
  p: 4,
};

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  refetch:()=>void
};
const ManageTeam: React.FC<Props> = ({ modal, setModal,refetch }) => {
  const handleClose = () => setModal(false);
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("admin");
  const [updateUser, { error, isSuccess, isLoading, reset }] =
    useUpdateUserMutation();

  const updateUserData = async (e: any) => {
    e.preventDefault();
    await updateUser({ email, role });
    if (isSuccess) {
      toast.success("User Role update Successful");
      setModal(false);
      refetch()
    }
    if (error) {
      if ("data" in error) {
        const err = error as any;
        console.log(err.data.message);
        toast.error(err.data.message);
      }

    }
  };

  return (
    <div>
      <Toaster />
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="text-black bg-red-400" sx={style}>
          <form onSubmit={updateUserData} className="">
            <h1 className="text-white mb-2">Add New Member</h1>
            <input
              required
              className="w-full rounded p-1 bg-[#131237] text-white"
              type="text"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              name=""
              id=""
              className="w-full rounded p-1 bg-[#131237] text-white mt-3"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {isLoading ?<p className="text-center text-white mt-1">Loading...</p>: (
              <button
                className="bg-[#FEAE6F] w-full px-10 mt-3 rounded-xl text-black"
                type="submit"
              >
                Update
              </button>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ManageTeam;
