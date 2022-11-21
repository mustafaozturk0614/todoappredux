import { TodoSlice } from "./features";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;
