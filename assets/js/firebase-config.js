import firebase from 'firebase/app';
import 'firebase/auth'; // Adicione outros módulos, como 'firebase/firestore' se necessário

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

firebase.initializeApp(firebaseConfig);