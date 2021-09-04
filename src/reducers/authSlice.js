const { createSlice } = require('@reduxjs/toolkit')

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    user: {},
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload
    },
    REMOVE_USER: (state, action) => {
      state.user = action.payload
    },
  },
})

const { reducer, actions } = authSlice

export const { SET_USER, REMOVE_USER } = actions

export default reducer
