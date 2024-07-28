

export async function getPost() {
    try {
      const response = await fetch('https://babckend-yf-3.onrender.com/api/v1/foro/');
      if (!response.ok){
        throw new Error('Error en la solicitud: '+ response.statusText)

      }
      const newData =await response.json();
      return newData
      
    } catch (e) {
      console.error("Error al obtener post ", e);
    }
  }
 
  //Crear nuevo post
export async function createPost(post){
    try {
        const response = await fetch('https://babckend-yf-3.onrender.com/api/v1/foro/' ,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name:"",
            user:"",
            post: post,
            
          }),
        
        });

        if (!response.ok){
          throw new Error('Error en la solicitud:' + response.statusText)
        }
        const newPost= await response.json();
        return newPost;
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