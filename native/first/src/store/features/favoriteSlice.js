import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    increment : (state) => {
      state.value += 1
    }
  }
})

export const {increment} = favoriteSlice.actions
export default favoriteSlice.reducer