import * as firebase from 'firebase';

const prodConfig = {
    apiKey: REACT_APP_PROD_API_KEY,
    authDomain: REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: REACT_APP_PROD_DATABASE_URL,
    projectId: REACT_APP_PROD_PROJECT_ID,
    storageBucket: REACT_APP_PROD_STOREAGE_BUCKET,
    messagingSenderId: REACT_APP_PROD_MESSAGING_SENDER_ID
  };

const devConfig = {
  apiKey: REACT_APP_DEV_API_KEY,
  authDomain: REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: REACT_APP_DEV_DATABASE_URL,
  projectId: REACT_APP_DEV_PROJECT_ID,
  storageBucket: REACT_APP_DEV_STOREAGE_BUCKET,
  messagingSenderId: REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
