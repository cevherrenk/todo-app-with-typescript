import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import todoSlice from "../features/todoSlice";
import userSlice from "../features/userSlice";

export const store  = configureStore({
      reducer:{
            todos: todoSlice,
            user: userSlice
      }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;