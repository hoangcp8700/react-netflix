import React from 'react'
import { firebase } from 'firebase.prod'

const useFireStore = target => {
  const [content, setContent] = React.useState([])

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(value => ({
          ...value.data(),
          docID: value.id,
        }))
        setContent(data)
      })
      .catch()
  }, [])

  return { data: content }
}

export default useFireStore
