// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{
  signInWithEmailAndPassword, getAuth
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5QSGfy5P-SXGMzQMD0AObyWEopEvyjDo",
  authDomain: "pokedex-f2aca.firebaseapp.com",
  projectId: "pokedex-f2aca",
  storageBucket: "pokedex-f2aca.appspot.com",
  messagingSenderId: "978848599580",
  appId: "1:978848599580:web:0bb7b76ad93c5b3e13d9d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const loginWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    return console.error(err)
  }
}

export {
  auth,
  loginWithEmailAndPassword
}
