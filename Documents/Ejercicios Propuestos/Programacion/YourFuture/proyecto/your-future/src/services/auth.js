

//importamos archivos de firebase
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  import { auth } from './firebase';
  export async function createUser(email, password){
    try {
        const authentication = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        return authentication.user;
    
    }catch(error){
        console.log(error.code);
        console.log(error.message);
        return null;
    }
  }

  export async function signIn(email,password){
    try{
        const authentication = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        return authentication.user;

    }catch(error){
        console.log(error.code);
        console.log(error.message);
        return null;
    }
  }


  export function getCurrentUser(){
    //promise,no hace falta poner return, tiene resolve, cuando es algo exitoso, y reject en caso de que el user no exista
    return new Promise ((resolve, reject) => {
        const observer =  onAuthStateChanged(auth, (user)=> {
            if(user){
                resolve(user);
                
            } else {
                reject("User no found")
            }
        });
        return observer;
    })
}