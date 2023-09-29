// Recupere as variáveis de ambiente secretas do GitHub usando `process.env`
const apiKey = ${{ secrets.API_KEY }};
const authDomain = ${{ secrets.AUTHDOMAIN }};
const databaseURL = ${{ secrets.DATABASEURL}};
const projectId = ${{ secrets.PROJECTID }};
const storageBucket = ${{ secrets.STORAGEBUCKET }};
const messagingSenderId = ${{ secrets.MESSAGINGSENDERID }};
const appId = ${{ secrets.APPID }};

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
