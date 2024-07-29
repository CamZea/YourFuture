import { useState, useEffect, useRef } from "react";
import { getPost, createPost } from "../../services/postservice";
import profile  from "src/assets/foro/profiles/undraw_profile_pic_re_iwgo.svg";
import cursoIA from "src/assets/imagenes/curso-IA.jpg";
import UpdatePost from "../EditPost";


export default function CreatePosts(props){
     const [post, setPost] = useState([]);
     const [inputPost, setInputPost] = useState("");

     useEffect(() => {
      async function fetchPost(){
        try  {
          const data= await getPost();
          console.log("post obtenidos:", data)
          setPost(data)//actualizar datos
        }catch(error){
          console.error('Error al cargar post', error)
        }
      }
      fetchPost()
     }, []);
     
      const handleInputPost = (event) => {
        setInputPost(event.target.value);
      };
     
      const handleSubmitPost =  async () => {
        if(inputPost.trim()){
          try{
            const newPost = await createPost(inputPost);
            console.log("nuevo post creado", newPost)
            setPost([...post, newPost]);
            setInputPost('');
          } catch(error){
            console.error("Error al agregar el post", error)
          }
        }
       
      }


      return(
    <>
    <div className=" justify-center  mt-14 ">
    <div className="relative flex justify-center bg-[#333332]  rounded-md ml-6 mt-4 h-[130px] w-[930px] ">
    
    <img src={profile}  className=" h-[45px] ml-5 mt-4" alt="" />
    <div className=" w-full ">

    <input 
    placeholder="Que está en tu mente?"
    onChange={handleInputPost}
    value={inputPost}
    type="text"
    className="rounded-xl p-1 outline-none bg-[#6968685e] text text-s text-white font-sans w-full  mt-6"/>
     
    </div>
    

    <div className="flex absolute bottom-2 left-4   ">
   
      <button 
      type="button"
      //onClick={()=> imageInput.current.click()}
      className="text-xs text-gray-400 font-ligth flex mt-3"
      
      > <svg viewBox="0 0 1024 1024" className="icon w-7 h-7 mr-2" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M924.8 331l-57.7-15.5-17.7-4.7-64.8-17.4v-67.2c0-31.7-16.5-46.8-46.8-46.8h-608c-30.2 0-46.8 15.1-46.8 46.8v483.3c0 31.7 16.5 46.8 46.8 46.8h153.5l492 131.8c29.2 7.8 49-2.5 57.3-33.1l16.1-60.2 108.9-406.6c8.4-30.6-3.7-49.4-32.8-57.2zM161.1 709.5c-25.2 0-31.2-15.2-31.2-31.2V257.4c0-25.2 15.2-31.2 31.2-31.2h545.6c16 0 31.2 6 31.2 31.2v420.9c0 16-6 31.2-31.2 31.2H161.1z m634.5 103.4c-4.1 15.4-13.9 28.5-38.2 22l25.7 6.9-319-85.5h273.8c30.2 0 46.8-15.1 46.8-46.8V341.9l97.8 26.2c15.4 4.1 28.5 13.9 22 38.2l8.1-30.1-17.7-4.8 17.7 4.8-117 436.7zM270.2 304.2c-34.4 0-62.4 27.9-62.4 62.4 0 34.4 27.9 62.4 62.4 62.4 34.4 0 62.4-27.9 62.4-62.4-0.1-34.5-28-62.4-62.4-62.4z" fill="#3CB87F"></path><path d="M151.2 737.5c-5.5 0-11-1.8-15.5-5.5-10.5-8.6-12-24-3.5-34.5l147.1-179.8c8.2-10 22.7-11.9 33.2-4.4l94.2 67.3 133-192.1c4.7-6.8 12.2-10.8 20.9-10.6 8.3 0.2 15.9 4.6 20.2 11.7l179.8 294.3c7.1 11.6 3.4 26.6-8.1 33.7-11.6 7-26.7 3.4-33.7-8.1L558.6 447.2 432.9 628.8c-3.7 5.4-9.5 9.1-16 10.2-6.4 1.1-13.1-0.4-18.5-4.2l-95.7-68.4-132.5 162.1c-4.9 5.9-11.9 9-19 9z" fill="#3CB87F"></path></g></svg>Foto/Video</button>
      
      <input 
      type="file"
      className="hidden"
      name="photoURL"
      //value={post.photoURL}
      //ref={imageInput}
      onChange={handleInputPost}
       />

     <button className="text-xs text-gray-400 font-ligth flex mt-3"><svg viewBox="0 0 24 24"  className="icon w-6 h-6 ml-2 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.83205 14.4453C8.5257 13.9858 7.90483 13.8616 7.4453 14.168C6.98577 14.4743 6.8616 15.0952 7.16795 15.5547C9.46665 19.0028 14.5334 19.0028 16.8321 15.5547C17.1384 15.0952 17.0142 14.4743 16.5547 14.168C16.0952 13.8616 15.4743 13.9858 15.1679 14.4453C13.6609 16.7059 10.3391 16.7059 8.83205 14.4453ZM17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5ZM10 9.5C10 10.3284 9.32843 11 8.5 11C7.67157 11 7 10.3284 7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5Z" fill="#e4fb37"></path> </g></svg>Estado</button>
      <a 
      className=" ml-8 border border-yellow-400 rounded-md text text-white text-xs p-2 cursor-pointer hover:bg-yellow-400 hover:text-white transition-all ease-in-out duration-300"
      onClick={()=>handleSubmitPost()}>
        Postear

      </a>
    </div>
</div>
<div id="container-chat" className=" p-4  ml-6 mt-4 rounded-md text-[#adadad] hover:text-white hover:bg-gradient-to-r hover:from-[#2d2d2d]  hover:border-r-[#2d2d2d] hover:border-r-[6px] "> 
      <div className=" p-3 border-top  border-top-gray-400 w-55 h-54">
        <img src={profile} className="w-7 h-7 ml-3" alt=""/><button href="" className="text-white text-sm p-2 font-semibold">User0041 </button>
        <span className="text text-xs text-gray-500 mt-2 mr-4">. Hace un dia</span>
      </div>
     
      <div className="ml-6">
        <p className="text-white text-sm font-serif">Hola chicos, he encontrado un curso interesante sobre inteligencia artificial.Estoy segura que les va a interesar</p>
        <p className="text-white text-sm font-serif">Aqui abajo les dejo el link.</p>
        <p className="text-white text-sm font-serif">Ya saben, estamos para apoyarnos. Alguien podria recomendarme cursos parecidos?</p>
        <img src={cursoIA} className="mt-4  h-96" />
      </div>
      <button className=" bg-gray-700  p-2 ml-6 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg fill="#fffafe" className="w-[18px] flex ml-2" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z"></path></g></svg>Likes</button>
      <button className=" bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg viewBox="0 0 1024 1024" fill="#ffffff" className="w-[18px] flex ml-8" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z" fill=""></path><path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z" fill=""></path></g></svg>Comentarios </button>
      <button className="bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm"><svg viewBox="0 0 24 24" fill="#ffffff" className="w-[18px] flex ml-6" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M14 6.5L9 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 17.5L9 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>Compartir</button>
     
  </div>
  <div>
  {post.map((item) => (
    <div key={item.id} > 
     <div className=" flex p-2  ml-4 mt-4 rounded-md text-[#adadad] hover:text-white hover:bg-gradient-to-r hover:from-[#2d2d2d]  hover:border-r-[#2d2d2d] hover:border-r-[6px] ">
      <div className="ml-6 ">
       <div className=" p-3 border-top  border-top-gray-400 w-65 h-54">
        <img src="src/assets/foro/profiles/undraw_profile_pic_re_iwgo.svg" className="w-7 h-7 ml-3" alt=""/><button href="" className="text-white text-sm p-2 font-semibold">User0041 </button>
       <span className="text text-xs text-gray-500 mt-2 mr-4">. Hace un dia</span>
         </div>
         <div className=" p-3 border-top  border-top-gray-400 w-55 h-54">
         <p className="text-white text-sm font-serif"> {item.name}</p>
         <p className="text-white text-sm font-serif"> {item.post}</p>
         <button className=" bg-gray-700  p-2 ml-6 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg fill="#fffafe" className="w-[18px] flex ml-2" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z"></path></g></svg>Likes</button>
         <button className=" bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg viewBox="0 0 1024 1024" fill="#ffffff" className="w-[18px] flex ml-8" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z" fill=""></path><path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z" fill=""></path></g></svg>Comentarios </button>
         <button className="bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm"><svg viewBox="0 0 24 24" fill="#ffffff" className="w-[18px] flex ml-6" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M14 6.5L9 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 17.5L9 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>Compartir</button>
     


         </div>
         
         </div>
         </div>
        
        </div>
        ))}
        </div>
                
              

  <div id="container-chat" className=" p-2  ml-3 mt-4 rounded-md text-[#adadad] hover:text-white hover:bg-gradient-to-r hover:from-[#2d2d2d]  hover:border-r-[#2d2d2d] hover:border-r-[6px] "> 
      <div className="flex  p-3 border-top  border-top-gray-400 w-65 h-54">
        <img src={profile} className="w-7 h-7 ml-3" alt=""/><button href="" className="text-white text-sm p-2 font-semibold">User0041 </button>
        <span className="text text-xs text-gray-500 mt-2 mr-4">. Hace un dia</span>
      </div>
     
      <div className="ml-6">
        <p className="text-white text-sm font-serif">Para los que estan intersados en estudiar carreras con respecto a la tecnologia, les recomiendo algunas instituciones.</p>
        <p className="text-white text-sm font-serif">Les dejo un articulo informativo sobre un ranking realizado aqui en Perú</p>
      
        <img
       src="https://elcomercio.pe/resizer/OVzWhcclijEDANYyueRN8Rbq49s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6QCZV7BH7NHWDKZBAJ4OOAKNPE.jpg" className="mt-4  h-96" />
      </div>
      <button className=" bg-gray-700  p-2 ml-6 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg fill="#fffafe" className="w-[18px] flex ml-2" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z"></path></g></svg>Likes</button>
      <button className=" bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  "><svg viewBox="0 0 1024 1024" fill="#ffffff" className="w-[18px] flex ml-8" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z" fill=""></path><path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z" fill=""></path></g></svg>Comentarios </button>
      <button className="bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm"><svg viewBox="0 0 24 24" fill="#ffffff" className="w-[18px] flex ml-6" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M14 6.5L9 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 17.5L9 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>Compartir</button>
     
  </div>

    </div>
    
    </>
)

}