// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyBSZrD1WWeio_VhPT6Rj9LORD2VwaAXMGc",
    authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_FIREBASE_APPID,
  };
  


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);



//Login google
 export const authGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
   
 };

//Para guardar Post

  export const saveNote = async (title, description, userId) => {
  // const db = getFirestore(); 
  const docRef= await addDoc( //variable!
    collection(db, 'notes'),{
      title: title ,
      description: description,
      // userId: userId
    }
  );
  console.log(docRef)
}
//Para traer Notas
 export const getNotes= async() => {
  const data = await getDocs(collection(db, 'notes'));
  const notes = [];
  data.forEach(item =>{
    //console.log("dataaa", item.data());
    notes.push({title: item.data().title, description: item.data().description})
  })
  return notes;
  }