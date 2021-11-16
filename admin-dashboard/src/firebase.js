import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJOmaBeggJdi7SOyliWCcnVyEg5phKXsg",
  authDomain: "webflix-7c0e5.firebaseapp.com",
  projectId: "webflix-7c0e5",
  storageBucket: "webflix-7c0e5.appspot.com",
  messagingSenderId: "171939065857",
  appId: "1:171939065857:web:40bbfbc4c5dd228b785000",
  measurementId: "G-WCGX2JEZ1W",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
