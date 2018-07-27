import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBk4hlfqhGqwL6fPkVvpfVihthXHHPTwGE",
  authDomain: "goalcoach-25a48.firebaseapp.com",
  databaseURL: "https://goalcoach-25a48.firebaseio.com",
  projectId: "goalcoach-25a48",
  storageBucket: "",
  messagingSenderId: "164928013391"
}

export const firebaseApp = firebase.initializeApp(config);
