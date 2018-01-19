import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBMCIqmh6XhdrxK7g3dvFTTpTs-vGpZEmM",
  authDomain: "cryptobox-prod.firebaseapp.com",
  databaseURL: "https://cryptobox-prod.firebaseio.com",
  projectId: "cryptobox-prod",
  storageBucket: "cryptobox-prod.appspot.com",
  messagingSenderId: "186452892319"
  };

const devConfig = {
  apiKey: "AIzaSyAMHbdx84Ox7bi1a-KfkycmjLalxwS7YAk",
  authDomain: "cryptobox-dev.firebaseapp.com",
  databaseURL: "https://cryptobox-dev.firebaseio.com",
  projectId: "cryptobox-dev",
  storageBucket: "cryptobox-dev.appspot.com",
  messagingSenderId: "343692599255"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
