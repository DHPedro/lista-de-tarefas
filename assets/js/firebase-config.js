
// Agora você pode acessar as variáveis de ambiente como process.env.VARIABLE_NAME
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTHDOMAIN;
const databaseURL = process.env.DATABASEURL;
const projectId = process.env.PROJECTID;
const storageBucket = process.env.STORAGEBUCKET;
const messagingSenderId = process.env.MESSAGINGSENDERID;
const appId = process.env.APPID;

// Configure o Firebase com as informações recuperadas
const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
