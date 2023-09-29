import firebase from 'firebase/app';
import 'firebase/auth';

// Recupere as variáveis de ambiente secretas do GitHub usando process.env
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTHDOMAIN;
const databaseURL = process.env.DATABASEURL;
const projectId = process.env.PROJECTID;
const storageBucket = process.env.STORAGEBUCKET;
const messagingSenderId = process.env.MESSAGINGSENDERID;
const appId = process.env.APPID;

// Configure o Firebase com as informações recuperadas
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
