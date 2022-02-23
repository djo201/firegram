import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDw2QF1ptk4GCeAnhvJifSZPsYtMLMLkzI',
  authDomain: 'react-firegram-906cf.firebaseapp.com',
  projectId: 'react-firegram-906cf',
  storageBucket: 'react-firegram-906cf.appspot.com',
  messagingSenderId: '408431284317',
  appId: '1:408431284317:web:e921e30cfbea344fd3fdb4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage(app);

export const projectFirestore = getFirestore(app);
