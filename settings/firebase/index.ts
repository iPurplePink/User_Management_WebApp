import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const G_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_G_MEASUREMENT_ID;
const SENDER_ID = process.env.FIREBASE_SENDER_ID;

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: G_MEASUREMENT_ID,
};

const initializeFirebase = () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics(firebaseApp);
};
export default initializeFirebase;
