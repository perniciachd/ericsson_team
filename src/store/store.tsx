import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import portfolioReducer from "./portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line react-refresh/only-export-components
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// eslint-disable-next-line react-refresh/only-export-components
export const useAppSelector = useSelector.withTypes<RootState>();
