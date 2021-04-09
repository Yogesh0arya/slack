import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDBJWHpnfKVKSMdVhGseWKhON61wChzH0",
    authDomain: "slack-6ccb1.firebaseapp.com",
    projectId: "slack-6ccb1",
    storageBucket: "slack-6ccb1.appspot.com",
    messagingSenderId: "329707977553",
    appId: "1:329707977553:web:e58bb0751f6b05269e3170"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider , db};
