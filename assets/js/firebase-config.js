

const core = require('@actions/core');

const apiKey = core.getInput('APIKEY');
const appId = core.getInput('APPID');
const authDomain = core.getInput('AUTHDOMAIN');
const databaseURL = core.getInput('DATABASEURL');
const messagingSenderId = core.getInput('MESSAGINGSENDERID');
const projectId = core.getInput('PROJECTID');
const storageBucket = core.getInput('STORAGEBUCKET');

const firebaseConfig = {
  apiKey: "${apiKey}",
  authDomain: "${authDomain}",
  databaseURL: "${databaseURL}",
  projectId: "${projectId}",
  storageBucket: "${storageBucket}",
  messagingSenderId: "${messagingSenderId}",
  appId: "${appId}",
};

// Inicialize o Firebase  
firebase.initializeApp(firebaseConfig);