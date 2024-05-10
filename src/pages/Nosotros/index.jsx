import logo from "../../assets/imagenes/logo_transparent.png";
import nosotros from "../../assets/imagenes/nosotros.jpg"
import { Link } from "react-router-dom";
import user from "../../assets/imagenes/user.jpg"


function Nosotros() {
    return (
      <>
        <main >
            <div className="flex mt-4 mr-4">
                    <img src= {logo} width={110}  alt="" />
                    <ul className="flex w-full h-[50px] gap-4 p-4 bg-black text-white text-sm rounded-lg items-center md:text-sm">
                        <li>
                            <Link className="hover:underline transition-all ease-in-out duration-300" to={"/home"}>
                                    Inicio 
                            </Link>
                        </li>
                        <li>
                            <Link  className="hover:underline transition-all ease-in-out duration-300" to={"/carreras"}>
                                    Carreras
                            </Link>
                        </li>
                        <li>
                            <Link>
                                    Comunidad
                            </Link>
                        </li>
                        <li>
                            <Link  className="hover:underline transition-all ease-in-out duration-300" to={"/"}>
                                    Sobre Nosotros
                            </Link>
                        </li>
                    </ul>    
            </div>
            <div className="flex w-full justify-center ">
                <img className="w-[60%] " src= {nosotros} alt="" />
            </div>
            <div className="flex h-[60vh] " >
                <div className="flex bg-violet-700 h-[30vh] mt-[20vh] w-[150vh]  
                    text-[3.5vh] text-justify items-center text-white " >
                    <p className="flex p-5">"Hacemos posible que cada uno de
                        nuestros estudiantes, en todo el Perú,
                        transforme su vida para siempre"</p>
                </div>
                <div className="flex w-full bg-stone-100 h-auto   ">
                    <div className=" flex flex-col h-full gap-5 p-5 text-justify text-[7px] items-center md:text-[3vh] ">
                        <p>
                            Bienvenido a Your Future, tu guía definitiva para explorar el mundo de las carreras y descubrir las oportunidades
                            que te esperan en el futuro. En esta plataforma interactiva, encontrarás información detallada sobre una amplia variedad 
                            de carreras, desde las tradicionales hasta las emergentes en campos innovadores.
                        </p>
                        <p>
                            Nuestro objetivo es proporcionarte recursos valiosos y orientación experta para ayudarte a tomar decisiones informadas sobre tu educación y carrera
                            profesional. Ya sea que estés en la escuela secundaria, buscando una carrera universitaria o considerando un cambio de rumbo en tu 
                            trayectoria profesional, aquí encontrarás todo lo que necesitas para dar el siguiente paso en tu viaje hacia el éxito.
                        </p>
                    </div>
                </div>
            </div >
            <div className="flex w-full h-[70vh] bg-black ">
                <ul className="flex mt-[6vh] gap-[20px] justify-center w-full md:gap-[4vh]">
                    <li className="flex flex-col items-center p-15" >
                        <img className="flex w-[15vh] h-[15vh] rounded-full items-center md:h-[25vh] md:w-[25vh]" src={user} width={80} alt=""/>
                        <div className="flex flex-col mt-10 text-[2vh] text-yellow-300 p-2 gap-3  items-center">
                            <p>Camila</p>
                            <p>Camila@yourfuture.com</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center p-15" >
                        <img className="flex w-[15vh] h-[15vh] rounded-full items-center md:h-[25vh] md:w-[25vh]" src={user} width={80} alt=""/>
                        <div className="flex flex-col mt-10 text-[2vh] text-yellow-300 p-2 gap-3  items-center">
                            <p>Milagros</p>
                            <p>Milagros@yourfuture.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
      </>
    );
  }
  
  export default Nosotros;