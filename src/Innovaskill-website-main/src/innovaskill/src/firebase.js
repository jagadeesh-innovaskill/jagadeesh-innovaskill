import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from './firebase'; 
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9Df7EWtuvOWfWhLOW1NpIZoAAY6_WfpY",
  authDomain: "otp-generator.firebaseapp.com",
  projectId: "otp-generator",
  storageBucket: "otp-generator.appspot.com",
  messagingSenderId: "331225869307",
  appId: "1:331225869307:web:6a781ad86fd737d0bd395e",
  measurementId: "G-XZCNGVCWL2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
//  default firebase;
