
// Función para agregar comunidades a la base de datos
export async function addComunidades(nombre) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/comunidades/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nombre,
        status: ""
      })

    });
   if (!response.ok){
    throw new Error('Error en la solicitud: ' + response.statusText);
   }
   const newCommunity= await response.json();
   console.log("Document created with ID: ", newCommunity.id);
   return newCommunity;
  } catch (e) {
    console.error("Error al agregar comunidad ", e);
  }
}

// Función para obtener comunidades de la base de datos
export async function getComunidades() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/comunidades/');
    if (!response.ok){
      throw new Error('Error en la solicitud: '+ response.statusText);
    }
    const newData= await response.json();
    console.log("Comunidades", newData);
    return newData;
  } catch (e) {
    console.error("Error al obtener comunidad ", e);
  }
}