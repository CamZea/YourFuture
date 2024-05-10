
import logo from "../../../assets/imagenes/logo_transparent.png";
import agronomia from "../../../assets/imagenes/carreras/agronomia.jpg";
import agrariaselva from "../../../assets/imagenes/logouniversidades/agraria_selva.jpg"
import agraria from "../../../assets/imagenes/logouniversidades/uagraria.jpg"
import universidad from "../../../assets/imagenes/bank.svg"
import libro from "../../../assets/imagenes/book2.svg"
import { Link } from "react-router-dom";




function Agronomia() {
    return (
        <>
            <main>
                <div className= "flex p-5 items-center bg-emerald-300">
                <img src= {logo} width={110}  alt="" />
                    <div className="font-sedan flex flex-col justify-center">
                        <span className="text-black">CARRERA DE </span>
                        <span className="text-green-500 text-[4vh]">AGRONOMIA</span>
                    </div>
                </div>
                <div>
                    <ul className="flex h-[65px] text-[gray] gap-4 p-3 ml-[6vh] text-[2vh] mb-10">
                        <li  className="relative ">
                            <Link to={"/home"}>
                                Inicio
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-5 transition-all duration-300 "></span>
                                <span className="absolute left-0 w-full h-1 bg-green-500 bottom-5 opacity-0 transition-all duration-300  "></span> 
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/carreras"}>
                                Áreas
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-5 transition-all duration-300 "></span>
                                <span className="absolute left-0 w-full h-1 bg-green-500 bottom-5 opacity-0 transition-all duration-300  "></span> 
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/carreras"}>
                                Comunidad
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-5 transition-all duration-300 "></span>
                                <span className="absolute left-0 w-full h-1 bg-green-500 bottom-5 opacity-0 transition-all duration-300  "></span>  
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/nosotros"}>
                                Sobre Nosotros
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-5 transition-all duration-300 "></span>
                                <span className="absolute left-0 w-full h-1 bg-green-500 bottom-5 opacity-0 transition-all duration-300  "></span>  
                            </Link>
                        </li>
                    </ul>    
                </div>
                <section className="">
                    <div className="mx-40">
                        <img className="h-[45vh] w-full  " src= {agronomia}   alt="" />
                    </div>
                    <div className="flex w-[60vh] g-5 rounded-lg mt-10 ml-4">
                        <img className="flex ml-10" src= {libro} width={40} alt=""   />
                        <h2  className="font-sedan text-gray-500 text-[4vh] p-5">Descripción</h2>
                    </div>
                    <div className="flex p-20 ml-[8vh] mr-[8vh] text-[15px] text-justify">
                        <p className="bg-emerald-200 p-10 h-[35vh]  rounded-[30px]">
                        La agronomía se enfoca en el estudio y la aplicación de prácticas agrícolas para la producción de alimentos y materias primas vegetales. Los agrónomos trabajan en el diseño de sistemas de cultivo eficientes, la gestión de suelos y recursos hídricos, y la implementación de tecnologías innovadoras para mejorar la productividad y la sostenibilidad en la agricultura.
                        Además se encarga del manejo de los cultivos, aplicando técnicas, estrategias y procesos de transformación y distribución de los productos del campo, mejorando así la calidad de la producción agrícola con el objetivo principal de identificar problemas y plantear soluciones. Es por ello que el futuro profesional debe reunir conocimientos en ciencias, química y biología para poder aportar nuevas tecnologías en beneficio del sector.
                        </p>
                    </div>
                    <div>
                        <div className="flex w-[60vh] g-5 rounded-lg mt-10 ml-4 ">
                            <img className="flex ml-10" src= {universidad} width={40} alt=""   />
                            <span className="flex p-4 font-sedan w-full text-gray-500 text-[3.5vh] font-medium  "> Instituciones Educativas
                                </span>
                        </div>
                    </div>
                    <div className="bg-stone-200 h-[50vh]  grid grid-cols-11" >
                        <div className="relative col-span-5 ">
                            <div className="flex rounded-lg mt-10 ml-4  ">
                                <span className="flex p-4 underline text-[2vh] font-light "> Universidades Públicas
                                </span>
                            </div>
                            <div className=" grid grid-cols-3">
                                <ul>
                                    <li class= "" >
                                        <div class="relative p-5 g-4 ">                                                                      
                                            <a href="https://www.facebook.com/unas.edu.pe/?locale=es_LA" target="_blank" rel="noopener noreferrer" > 
                                                <img class="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {agrariaselva} alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                    <li class= "" >
                                        <div class="relative p-5 g-4 ">                                                                      
                                            <a href="http://www.lamolina.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img class="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {agraria} alt="" />
                                            </a>
                                        </div> 
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                        <div className=" mt-10 border-l-[3px] border-gray-400 h-[40vh] "></div>
                        </div>
                        <div className="relative col-span-5 ">
                            <div className="flex mt-10 ml-4  ">
                                <span className="flex p-4 underline text-[2vh] font-light  "> Universidades Privadas
                                </span>
                            </div>
                            <div className=" grid grid-cols-3">
                                <ul>
                                    <li class= "" >
                                        <div class="relative ">                                                                      
                                            <a> 
                                            <img class="h-[35vh] flex bg-cover rounded-[20px]" src="./derecho.jpg" alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                    
                </section>
            </main>
        </>
    );
}
export default Agronomia;