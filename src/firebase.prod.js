import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// 1) when seeding the database you'll have to uncomment this!
// import { seedFirebaseDatabase } from 'app/data/seedFirebaseDatabase.prod'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
firebase.initializeApp(config)

// 2) when seeding the database you'll have to uncomment this!
// seedFirebaseDatabase(firebase)

// 3) once you have populated the database (only run once!),
// re-comment this so you don't get duplicate data
export { firebase }
