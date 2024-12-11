import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favoriteSlice";

export default configureStore({
  reducer : {
    favorite : favoriteReducer
  }
}) 