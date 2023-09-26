import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMOhVMhGQxC5oCq2jj7eqpe2eGz1t3tbU",
  authDomain: "otpproj-617f1.firebaseapp.com",
  projectId: "otpproj-617f1",
  storageBucket: "otpproj-617f1.appspot.com",
  messagingSenderId: "25001053857",
  appId: "1:25001053857:web:f8a7d082d00eb8041f2ae0",
  measurementId: "G-BEPTSDV8VK"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);