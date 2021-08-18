import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCXz-RwP2M_UsQUW6VkVSlcqUcLLsWBiuk",
    authDomain: "extratelecom-d4081.firebaseapp.com",
    projectId: "extratelecom-d4081",
    storageBucket: "extratelecom-d4081.appspot.com",
    messagingSenderId: "1033441212065",
    appId: "1:1033441212065:web:00a65ee65bcc269395e2e0",
    measurementId: "G-QVMV7SSHXL"
  };


const fire= firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
const db=fire.firestore();
const auth=fire.auth();
const storage= fire.storage();
export {db,auth,storage, provider,firebase}
provider.setCustomParameters({promte:'select_account'})
