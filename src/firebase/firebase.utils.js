import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDy2Z9lYuo0WabCusk_ofP44ePLpQfqpwc',
  authDomain: 'clothing-db-56511.firebaseapp.com',
  databaseURL: 'https://clothing-db-56511.firebaseio.com',
  projectId: 'clothing-db-56511',
  storageBucket: 'clothing-db-56511.appspot.com',
  messagingSenderId: '916714474583',
  appId: '1:916714474583:web:16dc5d2b22e3079419a712',
  measurementId: 'G-6N7CKFTG03',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
