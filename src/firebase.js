import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBt9hN2PS1aUEHvM8iOOPx4HRvZVU3dVs0",
  authDomain: "netflix-clone-2ea29.firebaseapp.com",
  projectId: "netflix-clone-2ea29",
  storageBucket: "netflix-clone-2ea29.appspot.com",
  messagingSenderId: "1090590835129",
  appId: "1:1090590835129:web:9d45f82a1df3b01949b668"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (name,email,password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth , email , password);
        const user = response.user;
        await addDoc(collection(db , "user") , {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth , email , password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}



const logOut = ()=> {
    signOut(auth)
}


export {auth , db , login , signUp , signOut , logOut}