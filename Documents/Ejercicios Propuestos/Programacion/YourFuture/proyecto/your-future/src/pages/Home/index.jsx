import { Footer, NavBar } from "../../components"
function Home(){
    return (
        <>
        <div>
            <NavBar/>
            <div className="p-5">
            <div className="flex flex-col items-center relative ">
              <img
                src="./src/assets/images/universidad2.png"
                alt=""
                className="w-[80%] rounded-md  "
              />
              <div
                className="absolute h-full flex flex-col items-center justify-center text-white"
              >
                <div
                  className="flex flex-col items-center justify-center  h-[100px] w-[550px]"
                >
                  <h1 className="uppercase text-5xl font-bold text-white">
                    Tu futuro te espera
                  </h1>
                  <p className="text-xl font-light text-white">
                    Encuentra la carrera que estas buscando en un solo paso
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center mt-5">
            <p className="w-[70%] font-Inter leading-8 text-gray-600 text-l  text-wrap ">
              ¡Descubre un mundo de posibilidades para tu futuro académico! Nuestra
              completa guía de universidades de todo el mundo te ofrece la
              oportunidad de explorar tus opciones y tomar decisiones informadas.
              Desde las instituciones mejor clasificadas hasta programas
              emocionantes y personas con ideas afines, te ayudamos a construir el
              camino perfecto para tus sueños. Con herramientas de búsqueda
              intuitivas, perfiles detallados y reseñas auténticas, te
              proporcionamos todo lo que necesitas para tomar la decisión correcta.
              ¡No esperes más para comenzar tu búsqueda y encontrar tu lugar ideal
              en el mundo académico! ¡Tu futuro te espera, empieza hoy mismo!
            </p>
          </div>
        </div>

       
       
       <div  className="grid grid-rows-2 grid-cols-2 gap-4 mr-10 ml-12 mt-8 bg-black-500">
           <div id="img-orientation" >
               <img src="/src/assets/images/orientacion.jpg" alt="" width="560"  />
           </div>
           <div className="container-orientation ">
               <h3 className="text-lg font-bold">Orientación Profesional</h3>
               <p className="mt-5 font-light leading-8">En esta sección, te ofrecemos orientación profesional personalizada para ayudarte a encontrar tu camino ideal. 
                   A través de un proceso de autodescubrimiento y análisis de tus aptitudes, intereses y valores, te guiaremos en la elección de la carrera
                   universitaria o técnica que mejor se ajuste a tu perfil. </p>
                   <div className="flex justify-center gap-9 mt-5">
                       <button   id="btn-questions" type="button"  className="border border-black bg-yellow-300 hover:bg-yellow-600 p-2 mt-6 btn-md text-black-400  rounded " >  Preguntas Frecuentes</button>
                       
                       <button id="btn-doaquestion" type="button" className="border border-black bg-yellow-300 hover:bg-yellow-600 p-2 mt-6 btn-md text-black-400  rounded "> Hacer una pregunta</button>
                   </div>

           </div>
          
           <div id="img-foro" className="mt-6" >
               <img src="/src/assets/images/foro.jpg" alt="" width="560" />
           </div>
           <div>
               <h3 className="text-lg font-bold mt-6">Foro </h3>
               <p className="mt-5 font-semibold" > ¡Bienvenidos al foro de estudiantes!</p>
               <p className="mt-5 font-light leading-8">
                   Este espacio está diseñado para que ustedes, los estudiantes, puedan ayudarse entre sí 
                   y compartir consejos, ideas y experiencias 
               </p>
               <div className="flex justify-center gap-9 mt-5">
                   <button id="btn-" type="button" className="border border-black bg-yellow-300 hover:bg-yellow-600 p-2 mt-6 btn-md text-black-400  rounded ">   Quiero conversar</button>
               </div>

           </div>
       </div>

       <Footer/>

 
   
  </>
    )
}

export default Home;
