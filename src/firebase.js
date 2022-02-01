import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCwMUyuUXxyxhs_UlcikA_06FqykLQ5WTA",
    authDomain: "blabar-cd73d.firebaseapp.com",
    projectId: "blabar-cd73d",
    storageBucket: "blabar-cd73d.appspot.com",
    messagingSenderId: "16761616357",
    appId: "1:16761616357:web:91dd30592db2a4118ae10c"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
