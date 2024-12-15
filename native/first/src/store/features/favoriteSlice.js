import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  favoriteArray: []
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    increment: (state, action) => {
      let isHaveCharacter = state.favoriteArray.find(x => x.id === action.payload.id)
      if (!isHaveCharacter) {
        state.value += 1
        state.favoriteArray.push(action.payload)
      }
    },
    clearAll : (state) => {
      state.favoriteArray = []
      state.value = 0
    }

  }
})

export const { increment, clearAll } = favoriteSlice.actions
export default favoriteSlice.reducer