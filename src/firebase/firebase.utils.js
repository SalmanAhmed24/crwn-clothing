import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDiPS6jeId2ijN6SwQaejHAZ3Zn483-Yuo",
  authDomain: "crwn-db-b1fda.firebaseapp.com",
  databaseURL: "https://crwn-db-b1fda.firebaseio.com",
  projectId: "crwn-db-b1fda",
  storageBucket: "crwn-db-b1fda.appspot.com",
  messagingSenderId: "589471018790",
  appId: "1:589471018790:web:5462fd6bafbc8af0fd5be7",
  measurementId: "G-4Y2Z0KNCV8"
};

export const createUser = async (userAuth,additionalData)=>{
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("there was an error",error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>{auth.signInWithPopup(provider)};
export default firebase;