import { initializeApp, getApps } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCWt4stIL9pa09hGlJZgb54c2m20cibACc",
//     authDomain: "devtalenthub-fb764.firebaseapp.com",
//     projectId: "devtalenthub-fb764",
//     storageBucket: "devtalenthub-fb764.appspot.com",
//     messagingSenderId: "114795938616",
//     appId: "1:114795938616:web:67b1ec65079e8ac6e237cd",
//     measurementId: "G-9ZY8SFYQWG"
// }

const firebaseConfig = {
    apiKey: "AIzaSyBJhk-I0Jrc2c3v0BSLO0y2MTDB0YVEx74",
    authDomain: "devtalenthub-develop.firebaseapp.com",
    projectId: "devtalenthub-develop",
    storageBucket: "devtalenthub-develop.appspot.com",
    messagingSenderId: "495578144188",
    appId: "1:495578144188:web:8029be04971a5d6658dfb9",
    measurementId: "G-TT3BQ2HWW7"
}

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export default firebase_app