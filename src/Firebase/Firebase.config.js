
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD2nVPqKteHXVEicHA6A8SISfuXnDusrLk",
//   authDomain: "rohima-s-kitchen.firebaseapp.com",
//   projectId: "rohima-s-kitchen",
//   storageBucket: "rohima-s-kitchen.appspot.com",
//   messagingSenderId: "979905876683",
//   appId: "1:979905876683:web:771cbd049a95372bc6c14e"
// };

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app