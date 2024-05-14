import { db } from "./firebase_2";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function getPost() {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id
      }));
      console.log("Post", newData);
      return newData;
    } catch (e) {
      console.error("Error al obtener post ", e);
    }
  }
 
export async function createPost(post){
    try {
        const docRef = await addDoc(collection(db, "posts"), {
          Descripcion:post,
          Fecha:"",
        
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

/*export async function updatePost(post){
    const response = await fetch(`${collection}/${post.id}`,{
        method:"PUT",
        body: JSON.stringify(post),
        headers:{
            "Content-Type": "application/json",
        }


    })
    const data= await response.json();
    return data;
}*/