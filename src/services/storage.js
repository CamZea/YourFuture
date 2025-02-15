import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase_2";

export async function storeFile(file){
    try{
        const storageRef= ref(storage, `images/${file.name}`  )
        const snapshot = await uploadBytes(storageRef, file);
        //recibe url final
        const url= await getDownloadURL(snapshot.ref);
       
       return url;
     } catch (error){
       console.log(error.code);
       console.log(error.message);
       return null
     }
    }
