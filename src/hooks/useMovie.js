import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MOVIE, TOGGLE_DIALOG } from 'reducers/movieSlice'

export default function useMovie() {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movie.movie)
  const showDialog = useSelector(state => state.movie.isDialog)

  const handleShowDialog = val => {
    dispatch(TOGGLE_DIALOG(val))
  }

  const handleAddMovie = item => {
    if (movie?.id === item?.id) return
    dispatch(ADD_MOVIE(item))
    handleShowDialog(true)
  }

  return { movie, handleAddMovie, showDialog, handleShowDialog }
}
