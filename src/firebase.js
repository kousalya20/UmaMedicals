import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC3Mg__SOytXP5DnhS-mPnYDAvgoaTkRks",
  authDomain: "uma-medicals.firebaseapp.com",
  projectId: "uma-medicals",
  storageBucket: "uma-medicals.appspot.com",
  messagingSenderId: "411802588730",
  appId: "1:411802588730:web:faf8426aca348b0a99c703",
  measurementId: "G-C0V76T6PK3"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
