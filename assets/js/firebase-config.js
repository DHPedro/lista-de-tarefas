const apiKey = env.APIKEY;
const authDomain = env.AUTHDOMAIN;
const databaseURL = env.DATABASEURL;
const projectId = env.PROJECTID;
const storageBucket = env.STORAGEBUCKET;
const messagingSenderId = env.MESSAGINGSENDERID;
const appId = env.APPID;

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
