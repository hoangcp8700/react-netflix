const { createSlice } = require('@reduxjs/toolkit')

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: {},
    isDialog: false,
  },
  reducers: {
    ADD_MOVIE: (state, action) => {
      state.movie = action.payload
    },
    TOGGLE_DIALOG: (state, action) => {
      state.isDialog = action.payload
    },
  },
})

const { reducer, actions } = movieSlice

export const { ADD_MOVIE, TOGGLE_DIALOG } = actions

export default reducer
