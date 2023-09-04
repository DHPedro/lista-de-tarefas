const core = require('@actions/core');

// Recupere as variáveis de ambiente secretas do GitHub
const apiKey = core.getInput('APIKEY');
const authDomain = core.getInput('AUTHDOMAIN');
const databaseURL = core.getInput('DATABASEURL');
const projectId = core.getInput('PROJECTID');
const storageBucket = core.getInput('STORAGEBUCKET');
const messagingSenderId = core.getInput('MESSAGINGSENDERID');
const appId = core.getInput('APPID');

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
