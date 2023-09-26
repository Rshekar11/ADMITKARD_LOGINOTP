import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_tQLBpGWPadqsaZWywmPJRBctVJBfuc8",
  authDomain: "admitkard-b21dc.firebaseapp.com",
  projectId: "admitkard-b21dc",
  storageBucket: "admitkard-b21dc.appspot.com",
  messagingSenderId: "732120468074",
  appId: "1:732120468074:web:fac9410f68007cb558d813",
  measurementId: "G-HY2RS9GGXV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);