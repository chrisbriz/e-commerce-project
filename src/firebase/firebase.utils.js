import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdtMYDQGEGyfKwj1H-C0bRkJOBy2vSnEc",
  authDomain: "e-com-db.firebaseapp.com",
  databaseURL: "https://e-com-db.firebaseio.com",
  projectId: "e-com-db",
  storageBucket: "e-com-db.appspot.com",
  messagingSenderId: "36665581270",
  appId: "1:36665581270:web:24664946d2ee56d042f377",
  measurementId: "G-Z1PVX2MTKL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;