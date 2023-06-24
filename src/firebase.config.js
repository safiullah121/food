import {getApp, getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB9aRVl0b2ty4fNwlU3NnXoe2e7OAAO2dg",
    authDomain: "food-app-83603.firebaseapp.com",
    databaseURL: "https://food-app-83603-default-rtdb.firebaseio.com",
    projectId: "food-app-83603",
    storageBucket: "food-app-83603.appspot.com",
    messagingSenderId: "344591096823",
    appId: "1:344591096823:web:fe66f988ca81b61b1aacf2"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};