import userSliceReducer from "../features/Auth/userSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = {
  user: userSliceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;