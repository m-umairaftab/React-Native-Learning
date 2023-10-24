// // Import the functions you need from the SDKs you need
// // import * as firebase from "firebase";
// import { firebase } from "@react-native-firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC_BuVQtoKMo8eBySBvqckb_GizM26HVcU",
//   authDomain: "foodswift-ad2a7.firebaseapp.com",
//   projectId: "foodswift-ad2a7",
//   storageBucket: "foodswift-ad2a7.appspot.com",
//   messagingSenderId: "513087700475",
//   appId: "1:513087700475:web:06e7a8fed5831da798df5e",
//   measurementId: "G-QQDZKJFRDL",
// };

// // Initialize Firebase
// let app;
// if (firebase?.apps?.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase?.app();
// }

// const auth = firebase.auth();

// const analytics = getAnalytics(app);

// export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_BuVQtoKMo8eBySBvqckb_GizM26HVcU",
  authDomain: "foodswift-ad2a7.firebaseapp.com",
  projectId: "foodswift-ad2a7",
  storageBucket: "foodswift-ad2a7.appspot.com",
  messagingSenderId: "513087700475",
  appId: "1:513087700475:web:06e7a8fed5831da798df5e",
  measurementId: "G-QQDZKJFRDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
