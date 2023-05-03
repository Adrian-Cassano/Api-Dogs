import { configureStore } from "@reduxjs/toolkit";
import dogsSlice from "../Slice/dogsSlice";

export const store = configureStore({
  reducer: {
    dogsSlice,
  },
});
