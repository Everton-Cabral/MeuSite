import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
import { getDatabase, dbRef } from 'firebase/database';


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBM1JF7IHGv84WettxgJVn_osKNOTOqaO4",
  authDomain: "delivery-60c58.firebaseapp.com",
  databaseURL: "https://delivery-60c58-default-rtdb.firebaseio.com",
  projectId: "delivery-60c58",
  storageBucket: "delivery-60c58.appspot.com",
  messagingSenderId: "674654586340",
  appId: "1:674654586340:web:b40d8d1cba3f6911afb3f1",
  measurementId: "G-KTH7MB8EQ6"
})


// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const todosRef = dbRef(db, 'todos')





  
