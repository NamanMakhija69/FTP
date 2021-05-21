import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBZxTGwgmb2VrD_nToONykKhAIth8kkO0k',
  authDomain: 'netflix-project-afebf.firebaseapp.com',
  projectId: 'netflix-project-afebf',
  storageBucket: 'netflix-project-afebf.appspot.com',
  messagingSenderId: '424986589674',
  appId: '1:424986589674:web:d3ce52a20cb9a12eba9a93',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
