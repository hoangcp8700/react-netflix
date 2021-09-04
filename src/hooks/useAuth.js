import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { firebase } from 'firebase.prod'
import { SET_USER } from 'reducers/authSlice'

export const useAuth = () => {
  const user = useSelector(state => state.authentication.user)
  const [isLoading, setLoading] = React.useState(true)
  const dispatch = useDispatch()

  const saveUser = ({ id, name, email, image }) => {
    return dispatch(SET_USER({ id, name, email, image }))
  }

  React.useEffect(() => {
    const unSubScribe = firebase.auth().onAuthStateChanged(userData => {
      userData &&
        saveUser({
          id: userData.uid,
          name: userData.displayName,
          email: userData.email,
          image: userData.photoURL,
        })
      setLoading(false)
      console.log('load user success', userData)
    })
    return () => unSubScribe()
  }, [])

  const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  const logIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  const logOut = () => {
    return firebase.auth().signOut()
  }
  return {
    user,
    isLoading,
    signUp,
    logIn,
    logOut,
    saveUser,
  }
}
