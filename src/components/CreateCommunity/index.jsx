import { useState, useEffect } from "react";
import { addComunidades,getComunidades } from "../../services/communityservice";
export default function CreateCommunity() {
    const [community , setCommunity] = useState([]);
    const [communityInput , setCommunityInput] = useState("");

    
  useEffect(() => {
    // Llamamos a la función para obtener las comunidades al montar el componente
    //funcion asincrona para obtener datos de comunidades
   async function fetchData(){
    try{
      const data= await getComunidades();
      console.log("datos obtenidos:", data)
      setCommunity(data)// Actualizamos el estado con las comunidades obtenidas
    } catch(error) {
        console.error('Error al cargar las comunidades:', error);
    }
  }
  fetchData() //llama a la funcion asincrona
}, []); // El arreglo vacío como segundo argumento asegura que el efecto se ejecute solo una vez al montar
  
//Funcion para manejar el envio de datos
const handleSubmitCommunity = async () => {
  if (communityInput.trim()) {  // Comprueba que la entrada no esté vacía o contenga solo espacios
      try {
          const newCommunity = await addComunidades(communityInput); // Llama a la función para agregar una nueva comunidad
          console.log("nueva comunidad agregada", newCommunity)
          setCommunity([...community, newCommunity]); // Agrega la nueva comunidad al estado actual
          setCommunityInput(''); // Resetea el campo de entrada
      } catch (error) {
          console.error("Error al agregar comunidad: ", error); // Manejo de errores
      }
  }
};

    const handleInputCommunity = (event) => {
      setCommunityInput(event.target.value);
      
    };
  
    return (
        <>
        <div className="flex items-center ">
            <ul className="">
              <li>
              <div className="flex ">
                <div>
                <a
              className=" bg-yellow p-3 text-md font-ligth text-white cursor-pointer "  
              onClick={()=> handleSubmitCommunity()}>
                <svg fill="#EADE0E" height="46px" viewBox="-10 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>more-or-less</title> <path d="M11.28 21.88h-10.36c-0.48 0-0.84 0.36-0.84 0.84s0.36 0.84 0.84 0.84h10.36c0.48 0 0.84-0.36 0.84-0.84 0-0.44-0.36-0.84-0.84-0.84zM0.84 15.4h4.44v4.44c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-4.44h4.44c0.48 0 0.84-0.36 0.84-0.84s-0.36-0.84-0.84-0.84h-4.44v-4.44c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v4.44h-4.44c-0.48 0-0.84 0.36-0.84 0.84 0 0.44 0.36 0.84 0.84 0.84z"></path> </g></svg>
                </a>
                </div>
              
             <div>
             <input 
                className=" bg-transparent mt-6 font-sans mr-4 text text-white "
                type="text"
                placeholder="Crea tu comunidad..."
                value={communityInput}
                onChange={handleInputCommunity} />

             </div>
              </div>
              </li>
              {community.map((item) =>(
                    <li key={item.id} >
                    <div className="flex mx-2 mt-2" >
                   
                      <div className="my-auto ">
                        <img
                          className="w-8 h-8 rounded-xl"
                          src="/src/assets/foro/profiles/user_8872036.png"
                          class="w-7 h-8"
                          alt=""
                        />
                      </div>

                      <button href="" className="text-white text-sm p-2 font-light">
                        {item.name}
                      </button>


                      <div className="my-auto">
                        {true ?
                          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ffffff"></path> </g></svg>
                          :

                          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        }
                      </div>
                      
                    </div>
                 
                    </li>
                  ))}
              
    
              <li>
              <div className="flex-col">

                  <div class="flex ml-2"><img src="/src/assets/foro/profiles/video-call_9274248.png" class="w-7 h-7" alt=""/><button href="" class="text-white text-sm p-2 font-light">Comunidad Tecnológica </button></div>
                  <div class="flex ml-2"> <img src="/src/assets/foro/profiles/doctor_4220231.png" class="w-7 h-7" alt=""/><button href="" class="text-white text-sm p-2 font-light">Comunidad de Biomédicas</button></div>
                 
                    </div>   
              </li>

            </ul>
          </div>
        </>
    )
}
