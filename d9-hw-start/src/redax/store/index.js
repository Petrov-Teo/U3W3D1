import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reduserc";

const store = configureStore({
  reducer: mainReducer,
});
export default store;
