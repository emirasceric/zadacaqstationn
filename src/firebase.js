import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "@firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB8dNCzCi74NBmZFeZVbMy50veh1AAWGiQ",
  authDomain: "drzave-55a30.firebaseapp.com",
  projectId: "drzave-55a30",
  storageBucket: "drzave-55a30.appspot.com",
  messagingSenderId: "471006884514",
  appId: "1:471006884514:web:2d5cfaa797d3e3e3bbddfb"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);



export  const auth = getAuth(app);

