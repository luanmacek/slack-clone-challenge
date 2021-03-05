import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEsU5__wk0YyBuKfx60qkqByMJ25pH1ts",
    authDomain: "slack-clone-challenge-e1062.firebaseapp.com",
    projectId: "slack-clone-challenge-e1062",
    storageBucket: "slack-clone-challenge-e1062.appspot.com",
    messagingSenderId: "111390808463",
    appId: "1:111390808463:web:78f8f85022ac88130293fa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;
  