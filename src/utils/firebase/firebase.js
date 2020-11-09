import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCJ-pPwyw-hdiZi5AzXin0LmR-wcryuf_U',
  authDomain: 'ecommerce2020-db.firebaseapp.com',
  databaseURL: 'https://ecommerce2020-db.firebaseio.com',
  projectId: 'ecommerce2020-db',
  storageBucket: 'ecommerce2020-db.appspot.com',
  messagingSenderId: '790035350240',
  appId: '1:790035350240:web:4f13335ecf91778aba0685',
  measurementId: 'G-ZM5HRGXKXN',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;