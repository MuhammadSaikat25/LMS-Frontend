import { createSlice } from "@reduxjs/toolkit";
interface User {
  [key: string]: string;
}
export interface TUser {
  user: null | User;
  token: null | string;
}
const initialState: TUser = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registration: (state, actions) => {
      state.token = actions.payload.token;
    },
    Login: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
    },
    logout: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { registration, logout, Login } = authSlice.actions;
export default authSlice.reducer;

