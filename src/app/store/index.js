import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'reducers/authSlice'
import movieReducer from 'reducers/movieSlice'

const rootReducer = {
  authentication: authReducer,
  movie: movieReducer,
}

export default configureStore({
  reducer: rootReducer,
})
