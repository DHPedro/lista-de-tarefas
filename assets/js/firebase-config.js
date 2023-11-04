// Configure o Firebase com as informações recuperadas
const firebaseConfig = {
  apiKey: "AIzaSyDluoFXPm-M4CmSv-Qc4zlbKZ97WBmtbTA",
  authDomain: "tarefas-55cab.firebaseapp.com",
  databaseURL: "https://tarefas-55cab-default-rtdb.firebaseio.com",
  projectId: "tarefas-55cab",
  storageBucket: "tarefas-55cab.appspot.com",
  messagingSenderId: "621664361214",
  appId: "1:621664361214:web:f1dbadb95b7a632d87a3af",
};

function encryptData(data) {
  const encryptedData = CryptoJS.AES.encrypt(data).toString();
  return encryptedData;
}

function decryptData(encryptedData, secretKey) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

const encryptedData = encryptData(firebaseConfig);
console.log('Dado criptografado:', encryptedData);

// Inicialize o Firebase  
firebase.initializeApp(encryptedData);