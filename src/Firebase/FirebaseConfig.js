import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALzM6HXiZWYRD3tJQ-XVrfwnav8eW2oFk",
  authDomain: "netflix-clone-e209f.firebaseapp.com",
  projectId: "netflix-clone-e209f",
  storageBucket: "netflix-clone-e209f.firebasestorage.app",
  messagingSenderId: "238125221182",
  appId: "1:238125221182:web:33d36c8034a4d992ced86f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
