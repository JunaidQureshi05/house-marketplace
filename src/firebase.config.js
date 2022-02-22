// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

export const db = getFireStore();
