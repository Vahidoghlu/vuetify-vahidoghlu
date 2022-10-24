import firebase from "firebase/compat";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDoFVUD9hJZOz7rrUVGFUw0U1gu6LvzZls",
  authDomain: "portfoliomessageabbas.firebaseapp.com",
  projectId: "portfoliomessageabbas",
  storageBucket: "portfoliomessageabbas.appspot.com",
  messagingSenderId: "870965504044",
  appId: "1:870965504044:web:6d80ddd9b258426f528989"
};


// init firebase app
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()


export  {projectFirestore}
