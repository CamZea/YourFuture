import logo from "../../assets/imagenes/logo_transparent.png";
import nosotros from "../../assets/imagenes/nosotros.jpg"
import { Link } from "react-router-dom";
import user from "../../assets/imagenes/user.jpg"

// Pagina de Nosotros
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
            <div className="flex text-[4vh] justify-center  ">
                <h2 className="text-[#9463C6]">¿Qué somos?</h2>
            </div>
            <div className="flex w-full h-[50vh] justify-center p-5 mx-[6vh] md:h-[60vh]">
                <img className="w-[40%] rounded-lg md:h-[50vh]" src= {nosotros} alt="" />
                <div className="flex flex-col h-[15%] gap-5 p-5 text-justify text-[8px] items-center md:text-[2vh] md:h-[50vh] md:items-center md:my-12 ">
                        <p>
                            Una guía definitiva para explorar el mundo de las carreras y descubrir las oportunidades
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
            <div className="flex items-center justify-center md:h-[20vh]">
                <div className="flex  h-[12vh] w-[70%] bg-[#9463C6] my-[20px] rounded-lg items-center justify-center text-white  ">
                    <p>"Comprometidos en ayudarte a encontrar la elección más idonea para ti"</p>
                </div>
            </div>
            <div className="">
                <div className="border border-grey-500 flex items-center justify-center p-6 gap-4 flex-col">
                    <h2>Nuestros Líderes </h2>
                    <p>Personas comprometidas con el cambio y bienestar de la sociedad</p>
                </div>
            </div>
            <div className="flex w-full h-[70vh] ">
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
            <footer>
                <div className="flex items-center justify-center h-[10vh] bg-black text-white">
                    <p>© 2021 Your Future. All rights reserved.</p>
                </div>
            </footer>
        </main>
    </>
    );
}
export default Nosotros;