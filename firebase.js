import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW7DC2B0t46ohLCTs7-xsJ_m1sjbXCIk4",
  authDomain: "signal-clone-8cb57.firebaseapp.com",
  projectId: "signal-clone-8cb57",
  storageBucket: "signal-clone-8cb57.appspot.com",
  messagingSenderId: "616587640639",
  appId: "1:616587640639:web:d1d5689b22f65429319d8a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
