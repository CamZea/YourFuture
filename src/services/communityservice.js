import { db } from "./firebase_2";
import { collection, addDoc, getDocs } from "firebase/firestore";


// Función para agregar comunidades a la base de datos
export async function addComunidades(nombre) {
  try {
    const docRef = await addDoc(collection(db, "comunidades"), {
      Avatar: '', 
      Nombre: nombre,

    });
    console.log("Documento creado con ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error al agregar comunidad ", e);
  }
}

// Función para obtener comunidades de la base de datos
export async function fetchComunidades() {
  try {
    const querySnapshot = await getDocs(collection(db, "comunidades"));
    const newData = querySnapshot.docs.map(doc => ({
      ...doc.data(), 
      id: doc.id
    }));
    console.log("Comunidades", newData);
    return newData;
  } catch (e) {
    console.error("Error al obtener comunidad ", e);
  }
}