import { Link } from "react-router-dom";

import derecho from "../../assets/imagenes/derecho.jpg";
import CienciasBiologicas from "../../assets/imagenes/biologia.jpg";
import salud from "../../assets/imagenes/medicina.jpg";


function Home() {


    return (
      <>
        <main >
            <div className="w-full p-6 ">
                <span className="flex w-full justify-center font-semibold text-[#EECF60] text-[30px]">Carreras de Pregrado</span>
                <div>
                        <ul className="p-4 grid grid-cols-3 ">
                            <li className="flex flex-col">
                                <img className="flex h-[30vh] bg-cover p-4 " src= {derecho} alt="" />
                                <div className="flex flex-col ml-4 ">
                                    <h2 className="text-sm font-semibold">Humanidades y Ciencias Sociales</h2>
                                    <Link to={"/cienciasbiologicas"}><button className="text-[#EECF60] mt-2 font-semibold text-[15px] hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-300 rounded-[5px]  ">Ver área →</button></Link>
                                </div>
                            </li>
                            <li className="flex flex-col">
                                <img className="h-[30vh] bg-cover p-4 " src={CienciasBiologicas} alt="" />
                                <div className="flex flex-col ml-4">
                                    <h2 className="text-sm font-semibold">Ciencias Biologicas</h2>
                                    <Link to={"/cienciasbiologicas"}><button className="text-[#EECF60] mt-2 font-semibold text-[15px] hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-300 rounded-[5px]  ">Ver área →</button></Link>
                                </div>
                            </li>
                            <li className="flex flex-col ">
                                <img className="h-[30vh] bg-cover p-4 " src={salud}  alt="" />
                                <div className="flex flex-col ml-4">
                                    <h2 className="text-sm font-semibold">Ciencias de la Salud</h2>
                                    <Link to={"/cienciasbiologicas"}><button className="text-[#EECF60] mt-2 font-semibold text-[15px] hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-300 rounded-[5px]  ">Ver área →</button></Link>
                                </div>
                            </li>
                        </ul>
                </div>
                <Link to={"/Carreras"}>
                    <button className="flex w-full justify-center">
                        <span className="border border-[#EECF60] w-[100px] text-[#EECF60] p-1 font-semibold text-[15px] hover:bg-yellow-300 hover:text-black transition-all ease-in-out duration-300">Ver más →</span>
                    </button>
                </Link>
            </div>
        </main>
      </>
    );
  }
  
  export default Home;