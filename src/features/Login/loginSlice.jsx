import { createSlice } from "@reduxjs/toolkit";





export const userSlice = createSlice({
name: "user",
initialState: {
  user : null,
},
reducers : {
  login: (state, action) => {
    console.log(action.payload, "hola")
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