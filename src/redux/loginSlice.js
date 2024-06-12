import { createSlice } from "@reduxjs/toolkit";





export const userSlice = createSlice({
name: "user",
initialState: {
  user : null,
},
reducers : {
  login: (state, action) => {
state.user = action.payload
  },
  logout: (state, action) => {

    return state
  }
}

})

const {actions, reducer} = userSlice

export const {login, logout} = actions

export default reducer;