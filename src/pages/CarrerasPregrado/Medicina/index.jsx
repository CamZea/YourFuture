
import medicina from "../../../assets/imagenes/carreras/medicina.jpg";

import upch from "../../../assets/imagenes/logouniversidades/privadas/upch.png"
import cientificas from "../../../assets/imagenes/logouniversidades/privadas/cientificasur.png"
import smartin from "../../../assets/imagenes/logouniversidades/privadas/sm.png"


import sm from "../../../assets/imagenes/logouniversidades/sm.jpg"
import villareal from "../../../assets/imagenes/logouniversidades/UNFV.png"
import unsa from "../../../assets/imagenes/logouniversidades/unsa.png"




import logo from "../../../assets/imagenes/logo_transparent.png";
import universidad from "../../../assets/imagenes/bank.svg"
import libro from "../../../assets/imagenes/book2.svg"
import { Link } from "react-router-dom";




function Medicina() {
    return (
        <>
            <main>
                <div className= "flex p-8 items-center bg-indigo-200  ">       
                <img src= {logo} width={110}  alt="" />
                    <div className="font-sedan flex flex-col justify-center">
                        <span className="text-black">CARRERA DE </span>
                        <span className="text-blue-500 text-[4vh]">MEDICINA</span>
                    </div>
                </div>
                <div>
                    <ul className="flex h-[70px] text-[gray] gap-4 p-3 ml-[8vh] text-[2vh] mb-10">
                        <li  className="relative">
                            <Link to={"/home"}>
                                Inicio
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-2 transition-all duration-300"></span>
                                <span className="absolute left-0 w-full h-1 bg-blue-500 bottom-2 opacity-0 transition-all duration-300"></span> 
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/carreras"}>
                                Áreas
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-2 transition-all duration-300"></span>
                                <span className="absolute left-0 w-full h-1 bg-blue-500 bottom-2 opacity-0 transition-all duration-300"></span>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/carreras"}>
                                Comunidad
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-2 transition-all duration-300"></span>
                                <span className="absolute left-0 w-full h-1 bg-blue-500 bottom-2 opacity-0 transition-all duration-300"></span> 
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to={"/nosotros"}>
                                Sobre Nosotros
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-2 transition-all duration-300"></span>
                                <span className="absolute left-0 w-full h-1 bg-blue-500 bottom-2 opacity-0 transition-all duration-300"></span> 
                            </Link>
                        </li>
                    </ul>    
                </div>
                <section className="">
                    <div className="mx-40">
                        <img className="h-[45vh] w-full  " src= {medicina}   alt="" />
                    </div>
                    <div className="flex w-[60vh] g-5 rounded-lg mt-10 ml-4">
                        <img className="flex ml-10" src= {libro} width={40} alt=""   />
                        <h2  className="font-sedan text-gray-500 text-[4vh] p-5">Descripción</h2>
                    </div>
                    <div className="flex p-20 ml-[8vh] mr-[8vh] text-[15px] text-justify">
                        <p className="bg-indigo-300 p-10 h-[40vh]  rounded-[30px]">
                            La carrera de medicina es una disciplina apasionante que implica el estudio del cuerpo humano, las enfermedades y su tratamiento. Los estudiantes de medicina adquieren
                            un amplio conocimiento en áreas como anatomía, fisiología, bioquímica, farmacología y patología, entre otras.

                            El programa de medicina generalmente comienza con una sólida base en ciencias básicas y luego se avanza hacia cursos más 
                            específicos relacionados con la práctica clínica. Los estudiantes tienen la oportunidad de participar en experiencias 
                            prácticas en hospitales, clínicas y consultorios médicos, donde pueden aplicar lo que han aprendido en un entorno real de 
                            atención médica.
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
                            <div>
                                <ul className=" grid grid-cols-3">
                                    <li  className="relative p-5 g-4 " >
                                        <div>                                                                      
                                            <a href="https://unmsm.edu.pe/" target="_blank" rel="noopener noreferrer" > 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {sm} alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                    <li  className="relative p-5 g-4 " >
                                        <div>                                                                      
                                            <a href="https://www.unfv.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {villareal} alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                    <li  className="relative p-5 g-4 " >
                                        <div>                                                                      
                                            <a href="https://www.unsa.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {unsa} alt="" />
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
                            <div>
                                <ul className=" grid grid-cols-3">
                                    <li className="relative p-5 g-4 " >
                                        <div >                                                                      
                                            <a href="https://cayetano.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {upch} alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                    <li className="relative p-5 g-4 " >
                                        <div>                                                                      
                                            <a href="https://www.cientifica.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {cientificas} alt="" />
                                            </a>
                                        </div> 
                                    </li>
                                    <li className="relative p-5 g-4 " >
                                        <div>                                                                      
                                            <a href="https://usmp.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {smartin} alt="" />
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
export default Medicina;