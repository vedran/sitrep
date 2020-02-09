import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import blocks from "./slices/blocks";
import todos from "./slices/todos";

export default configureStore({
  reducer: combineReducers({ blocks, todos })
});
