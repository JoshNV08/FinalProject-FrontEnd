import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    destroyToken: (state, action) => {
      return { token: null };
    },
  },
});

const { actions, reducer } = userSlice;

export const { setToken, destroyToken } = actions;


export default reducer;
