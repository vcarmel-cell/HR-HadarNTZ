// Firebase project: hr-hadarntz
const FIREBASE_CONFIG = {
  projectId: "hr-hadarntz",
  appId: "1:468732079143:web:5bc91ab324cd21a9a6b202",
  storageBucket: "hr-hadarntz.firebasestorage.app",
  apiKey: "AIzaSyCfW2RmaQWlqDZdouW5oEB8vKRA1PWPj_I",
  authDomain: "hr-hadarntz.firebaseapp.com",
  messagingSenderId: "468732079143"
};

// Filled in once functions/detectFields is deployed (see functions/index.js).
// Until then, aiDetectConfigured() in templates.js keeps the button hidden.
const AI_DETECT_FUNCTION_URL = 'https://us-central1-hr-hadarntz.cloudfunctions.net/detectFields';

if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Secondary app instance, used only when an admin/manager creates a new
// portal login for an employee — createUserWithEmailAndPassword() on the
// primary app would otherwise sign the admin out and sign in as the new user.
function withSecondaryAuth() {
  let secondaryApp = firebase.apps.find(a => a.name === 'secondary');
  if (!secondaryApp) secondaryApp = firebase.initializeApp(FIREBASE_CONFIG, 'secondary');
  return secondaryApp.auth();
}
