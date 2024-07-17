"use client";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi} from "./feature/api/baseApi";
import authSlice from "./feature/auth/authSlice";
export const stor = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth:authSlice
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
