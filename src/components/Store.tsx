import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "./UserSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// // inferred from the store, so it stays correct as you add slices
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// // pre-typed hooks — use these instead of plain useSelector/useDispatch
export const useAppDispatch = useDispatch.withTypes<any>();
export const useAppSelector = useSelector.withTypes<any>();