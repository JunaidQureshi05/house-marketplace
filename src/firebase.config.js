import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvE3Am_Cqjz7m_1A8aF-foMcHR-cXEeYA',
  authDomain: 'house-market-place-app-d55a5.firebaseapp.com',
  projectId: 'house-market-place-app-d55a5',
  storageBucket: 'house-market-place-app-d55a5.appspot.com',
  messagingSenderId: '269005022848',
  appId: '1:269005022848:web:16c0fd5b35d6b5621f2865',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
