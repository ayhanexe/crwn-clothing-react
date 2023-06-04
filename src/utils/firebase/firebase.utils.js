import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfyZymqKyO82A6lp9Ri0OMUDpjwSotSSI",
    authDomain: "crwn-db-0x21106.firebaseapp.com",
    projectId: "crwn-db-0x21106",
    storageBucket: "crwn-db-0x21106.appspot.com",
    messagingSenderId: "676549643756",
    appId: "1:676549643756:web:0cabc934fc1503145084c9",
    measurementId: "G-9WE4KCLXSM"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.error(`Error when creating the user:\n${error}`)
        }
    }

    return userDocRef;
}