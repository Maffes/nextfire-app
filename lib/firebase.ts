import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBvUpL8gDkSdfwVQqjal1SkrdX_ILFt584',
  authDomain: 'maff-backend.firebaseapp.com',
  projectId: 'maff-backend',
  storageBucket: 'maff-backend.appspot.com',
  messagingSenderId: '393749416887',
  appId: '1:393749416887:web:ca3ecce2845c5053bcb632',
  measurementId: 'G-3QMM9Z4HMM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
