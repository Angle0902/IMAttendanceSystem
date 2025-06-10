const firebaseConfig = {
  apiKey: "AIzaSyCQHVXqgrcEOPxGRbiTq-_EBOGIgX-n-K0",
  authDomain: "jhs-attendance-app.firebaseapp.com",
  projectId: "jhs-attendance-app",
  storageBucket: "jhs-attendance-app.firebasestorage.app",
  messagingSenderId: "622813604760",
  appId: "1:622813604760:web:6bd481932e154512b5d9ed",
  measurementId: "G-BQVD6JB7D5"
};


















const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};



Find and change this line:
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-attendance-app';
...and change it to something simple, like:
const appId = 'my-attendance-app';