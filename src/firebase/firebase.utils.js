import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDIbIscp4s2aoSHGMai3KKMAA4M945tfok",
    authDomain: "crwn-db-3b1c8.firebaseapp.com",
    projectId: "crwn-db-3b1c8",
    storageBucket: "crwn-db-3b1c8.appspot.com",
    messagingSenderId: "550140521520",
    appId: "1:550140521520:web:ed55779b67308dca5551f5",
    measurementId: "G-VQHGMC95MR"
};

export const createUserProfileDocumnent = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user:', error.message)
        }
    };

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;