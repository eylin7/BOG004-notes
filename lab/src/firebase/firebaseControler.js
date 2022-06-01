import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export {initializeApp, getFirestore,getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup}