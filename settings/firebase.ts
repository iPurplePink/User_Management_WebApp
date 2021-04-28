import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const PROJECT_ID = "maridin-san-miguel";
const API_KEY = "AIzaSyB45NMzJHWWPE-_7Sc1FJkw6kNSo_sQpDU";
const APP_ID = "1:56666973945:web:785d2757d377afea65a428";
const G_MEASUREMENT_ID = "G-XH6K0W3Q4K";
const SENDER_ID = "56666973945";

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
