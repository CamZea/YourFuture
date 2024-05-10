
import biologiamarina from "../../../assets/imagenes/carreras/biolog_marina.jpg";

import cientificas from "../../../assets/imagenes/logouniversidades/privadas/cientificasur.png"
import sm from "../../../assets/imagenes/logouniversidades/sm.jpg"


import logo from "../../../assets/imagenes/logo_transparent.png";
import universidad from "../../../assets/imagenes/bank.svg"
import libro from "../../../assets/imagenes/book2.svg"
import { Link } from "react-router-dom";




function Biologiamarina() {
    return (
        <>
            <main>
                <div className= "flex p-8 items-center bg-cyan-100 ">       
                <img src= {logo} width={110}  alt="" />
                    <div className="font-sedan flex flex-col justify-center">
                        <span className="text-black">CARRERA DE </span>
                        <span className="text-blue-500 text-[4vh]">BIOLOGIA MARINA</span>
                    </div>
                </div>
                <div>
                    <ul className="flex h-[70px] text-[gray] gap-4 p-3 ml-[8vh] text-[2vh] mb-10">
                        <li className="relative">
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
                            <Link  to={"/nosotros"}>
                                Sobre Nosotros
                                <span className="absolute left-0 w-full h-1 bg-transparent bottom-5 transition-all duration-300 "></span>
                                <span className="absolute left-0 w-full h-1 bg-green-500 bottom-5 opacity-0 transition-all duration-300  "></span> 
                            </Link>
                        </li>
                    </ul>    
                </div>
                <section className="">
                    <div className="mx-40">
                        <img className="h-[45vh] w-full  " src= {biologiamarina}   alt="" />
                    </div>
                    <div className="flex w-[60vh] g-5 rounded-lg mt-10 ml-4">
                        <img className="flex ml-10" src= {libro} width={40} alt=""   />
                        <h2  className="font-sedan text-gray-500 text-[4vh] p-5">Descripción</h2>
                    </div>
                    <div className="flex p-20 ml-[8vh] mr-[8vh] text-[15px] text-justify ">
                        <p className="bg-cyan-200 p-10 h-[35vh]  rounded-[30px]">
                            La biología marina es una rama de la biología que se enfoca en el estudio de los organismos que habitan
                            en los océanos y otros cuerpos de agua salada, así como en los procesos y fenómenos que ocurren en 
                            estos ecosistemas acuáticos. Esta disciplina abarca una amplia gama de temas, desde la biología de organismos individuales hasta la ecología de comunidades enteras y la conservación de los ecosistemas marinos.
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
                                    <li className="relative p-5 g-4 " >
                                        <div >                                                                      
                                            <a href="https://unmsm.edu.pe/" target="_blank" rel="noopener noreferrer" > 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {sm} alt="" />
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
                            <div >
                                <ul className=" grid grid-cols-3">
                                    <li class="relative p-5 g-4 " >
                                        <div class="relative p-5 g-4 ">                                                                      
                                            <a href="https://www.cientifica.edu.pe/" target="_blank" rel="noopener noreferrer"> 
                                                <img className="flex h-[8vh] rounded-[20px] transform hover:scale-150 transition-transform duration-300" src= {cientificas} alt="" />
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
export default Biologiamarina;